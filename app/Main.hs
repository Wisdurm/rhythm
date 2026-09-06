{-# LANGUAGE OverloadedStrings #-}

module Main where

import Network.HTTP.Types.Status (status200, status400)
import Network.HTTP.Types.Method (methodGet)
import Network.Wai (Application, Request, Response,
                    responseLBS, pathInfo, requestMethod)
import Network.Wai.Handler.Warp (run)
--import Midi (parseFile)

port :: Int
port = 1234

wrongMethod :: Response
wrongMethod = responseLBS status400 [] "Wrong methods"

servePath :: Request -> Response
servePath req =
  case pathInfo req of
    ("api":"notes":_)
      | requestMethod req == methodGet -> responseLBS status200 [] "Notes"
      | otherwise -> wrongMethod
    ("api":_) -> responseLBS status200 [] "Api"
    _ -> responseLBS status200 [] "Unkown"

application :: Application
application request respond = do
  let response = servePath request
  respond response

main :: IO ()
main = do
  run port application
