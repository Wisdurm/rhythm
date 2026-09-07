{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE DeriveGeneric, DeriveAnyClass #-}

module Main where

import Network.HTTP.Types.Status (status200, status400)
import Network.HTTP.Types.Method (methodGet, methodPost)
import Network.Wai (Application, Request, Response,
                    responseLBS, pathInfo, requestMethod,
                    getRequestBodyChunk)
import Network.Wai.Handler.Warp (run)
import qualified Data.ByteString.Lazy as BL
import qualified Data.Map as Map
import GHC.Generics
import Data.Aeson
--import Midi (parseFile)

data ParseMidi = ParseMidi { text :: String }
  deriving (Generic, FromJSON)

port :: Int
port = 1234

wrongMethod :: Response
wrongMethod = responseLBS status400 [] "Wrong methods"

parseData :: Request -> IO (Response)
parseData req = do
  c <- getRequestBodyChunk req
  print c
  return (responseLBS status200 [] (BL.fromStrict c))

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
