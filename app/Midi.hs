module Midi where

import Sound.MIDI.File.Load (maybeFromByteList)
import qualified Sound.MIDI.Parser.Report as Report
import Sound.MIDI.File (getTracks)
import Sound.MIDI.File.Event ( T(MIDIEvent), T(MetaEvent), ElapsedTime, fromElapsedTime)
import Sound.MIDI.File.Event.Meta ( T(SetTempo), Tempo)
import Sound.MIDI.Message.Channel ( T(Cons), Body(Voice))
import Sound.MIDI.Message.Channel.Voice ( T(NoteOn), T(NoteOff), fromPitch)
import Data.EventList.Relative.TimeBody (toPairList)
import Data.List (sortBy)
import Numeric.NonNegative.Wrapper (toNumber)
import qualified Data.Map as Map
import qualified Data.ByteString.Lazy as BL

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

getTempo ::  [(ElapsedTime, Sound.MIDI.File.Event.T)] -> Maybe Int
getTempo ((_, (MetaEvent (SetTempo tempo))):_) = Just . toNumber $ tempo
getTempo (x:xs) = getTempo xs
getTempo [] = Nothing

parseFile :: BL.ByteString -> Maybe (Int, [Int], [Int], [Int])
parseFile fData =
  case maybeFromByteList . BL.unpack $ fData of
    (Report.Cons errors (Left _)) -> Nothing
    (Report.Cons _ (Right file)) ->
      let track = head . getTracks $ file
          list = toPairList track
          notes = getNotes list
          tempo = getTempo list
          (ns, nls, nss) = unzip3 . sortBy (\(_,_,s) (_,_,s') -> compare s s') $ notes
      in do
        t <- tempo
        return (t, ns, nls, nss)
