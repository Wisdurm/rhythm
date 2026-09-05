module Main where

import Sound.MIDI.File.Load (fromFile)
import Sound.MIDI.File (getTracks)
import Sound.MIDI.File.Event ( T(MIDIEvent), ElapsedTime, fromElapsedTime)
import Sound.MIDI.Message.Channel ( T(Cons), Body(Voice))
import Sound.MIDI.Message.Channel.Voice ( T(NoteOn), T(NoteOff), fromPitch)
import Data.EventList.Relative.TimeBody (toPairList)
import Data.List (sortBy)
import qualified Data.Map as Map

getNotes :: [(ElapsedTime, Sound.MIDI.File.Event.T)] -> [(Int,Int,Int)]
getNotes track = go track 0 Map.empty
  where
    go ((t, (MIDIEvent (Cons _ (Voice (NoteOn p _))))) : xs) acc starts =
      let pitch = fromPitch p
          elapsed = fromIntegral . fromElapsedTime $ t
          time = acc + elapsed
      in go xs time (Map.insert pitch time starts)
    go ((t, (MIDIEvent (Cons _ (Voice (NoteOff p _))))) : xs) acc starts =
      let pitch = fromPitch p
          elapsed = fromIntegral . fromElapsedTime $ t
          time = acc + elapsed
          startTime = Map.findWithDefault 0 pitch starts
          period = time - startTime
          rest = go xs time starts
      in ((pitch, period, startTime):rest)
    go ((t,_):xs) acc starts =
      let elapsed = fromIntegral . fromElapsedTime $ t
          time = acc + elapsed
      in go xs time starts
    go _ _ _ = []

main :: IO ()
main = do
  file <- fromFile "tulip.mid"
  let track = head . getTracks $ file
      list = toPairList track
      notes = getNotes list
      (ns,nls,nss) = unzip3 . sortBy (\(_,_,s) (_,_,s') -> compare s s') $ notes
  print ns
  print nls
  print nss
