{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE DeriveGeneric, DeriveAnyClass #-}

module Main where

import Network.HTTP.Types.Status (Status, status200,
                                  status400, status404)
import Network.HTTP.Types.Method (methodGet, methodPost)
import Network.HTTP.Types.Header (hContentType)
import Network.Wai (Application, Request, Response,
                    responseLBS, pathInfo, requestMethod,
                    responseFile)
import Network.Wai.Handler.Warp (run)
import Network.Wai.Parse (parseRequestBodyEx, lbsBackEnd,
                         defaultParseRequestBodyOptions,
                           RequestParseException, Param, File,
                           fileContentType, fileContent)
import Control.Exception (try)
import qualified Data.ByteString.Lazy as BL
import qualified Data.ByteString as B
import qualified Data.Text as T (Text, unpack, takeWhileEnd)
import GHC.Generics
import Data.Aeson
import Midi (parseFile)

data ParsedMidi = ParsedMidi
                  { tempo :: Int,
                    notes :: [Int],
                    noteLengths :: [Int],
                    noteStarts :: [Int] }
                deriving (Generic, ToJSON)

data ErrorMidi = ErrorMidi
                 { error :: String }
               deriving (Generic, ToJSON)

port :: Int
port = 1234

-- Safe because only using my own files
getMime :: T.Text -> B.ByteString
getMime file = case T.takeWhileEnd (/='.') file of
                 "js" -> "application/javascript"
                 "svg" -> "image/svg+xml"
                 _ -> "kissa"

unknownPath :: Response
unknownPath = responseJSON status404 (ErrorMidi "Unknown path")

wrongInput :: Response
wrongInput = responseJSON status400 (ErrorMidi "Wrong input")

brokenInput :: Response
brokenInput = responseJSON status400 (ErrorMidi "Broken midi file")

responseJSON :: ToJSON a => Status -> a -> Response
responseJSON st json = responseLBS st [(hContentType, "application/json")]
               (encode json)

parseData :: Request -> IO (Response)
parseData req = do
  r <- Control.Exception.try (parseRequestBodyEx
                              defaultParseRequestBodyOptions
                              lbsBackEnd req)
       :: IO (Either RequestParseException ([Param], [File BL.ByteString]))
  case r of
    Right (_,((_,file):_)) ->
      if (fileContentType file) == "audio/midi" then do
        let midi = parseFile . fileContent $ file
        case midi of Just (tempo, ns, nls, nss) ->
                       return . responseJSON status200 $ (ParsedMidi tempo ns nls nss)
                     Nothing -> return brokenInput
        else return wrongInput
    Right _ -> return wrongInput
    Left _ -> return wrongInput

application :: Application
application req res
  | requestMethod req == methodPost =
      case pathInfo req of
        ["api","notes"] -> parseData req >>= res
        _ -> res unknownPath
  | requestMethod req == methodGet =
      case pathInfo req of
        [] -> res (responseFile status200 [] "static/index.html" Nothing)
        -- Don't think (?) there's any path traversal risk here
        ["static",file] -> res (responseFile status200 -- who cares about mime type
                                 [(hContentType, getMime file)]
                                 ("static/"++(T.unpack file)) Nothing)
        _ -> res unknownPath
  | otherwise = res unknownPath

main :: IO ()
main = do
  run port application
