{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE DeriveGeneric, DeriveAnyClass #-}

module Main where

import Network.HTTP.Types.Status (status200, status400)
import Network.HTTP.Types.Method (methodGet, methodPost)
import Network.Wai (Application, Request, Response,
                    responseLBS, pathInfo, requestMethod,
                    getRequestBodyChunk)
import Network.Wai.Handler.Warp (run)
import Network.Wai.Parse (parseRequestBodyEx, lbsBackEnd,
                         defaultParseRequestBodyOptions,
                           RequestParseException, Param, File,
                           fileContentType, fileContent)
import Control.Exception (try)
import qualified Data.ByteString.Lazy as BL
import qualified Data.Text as T (pack)
import Data.Text.Encoding (encodeUtf8)
import qualified Data.Map as Map
import GHC.Generics
import Data.Aeson
import Midi (parseFile)

data ParseMidi = ParseMidi { text :: String }
  deriving (Generic, FromJSON)

port :: Int
port = 1234

wrongMethod :: Response
wrongMethod = responseLBS status400 [] "Wrong methods"

wrongInput :: Response
wrongInput = responseLBS status400 [] "Wrong input"

parseData :: Request -> IO (Response)
parseData req = do
  r <- Control.Exception.try (parseRequestBodyEx
                              defaultParseRequestBodyOptions
                              lbsBackEnd req)
       :: IO (Either RequestParseException ([Param], [File BL.ByteString]))
  case r of
    Right (_,((_,file):_)) -> do
      if (fileContentType file) == "audio/midi" then do
        let midi = parseFile . fileContent $ file
        case midi of Nothing -> return wrongInput
                     Just m -> return (responseLBS status200 []
                                        (BL.fromStrict (encodeUtf8( T.pack( show  m)))))
        else return wrongInput
    Left ex -> return wrongInput
    Right _ -> return wrongInput

application :: Application
application req res
  | requestMethod req == methodPost =
      case pathInfo req of
        ("api":"notes":_) -> parseData req >>= res
        _ -> res wrongMethod
  | otherwise = res wrongMethod

main :: IO ()
main = do
  run port application
