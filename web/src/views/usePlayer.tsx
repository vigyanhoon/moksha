import { useState, useEffect, useRef, useCallback } from 'react';
import { mantras, MantraType } from './VishnuSahasranama/text';

export default function usePlayer(audio: HTMLAudioElement) {
    const [currentPlaying, setCurrentPlaying] = useState(0)
    const [playing, setPlaying] = useState(false)
    const [looping, setLooping] = useState(false)

    const index = useRef(0)
    const currentTime = mantras[index.current]?.time
    const nextTime = mantras[index.current + 1]?.time

    const handleEvent = useCallback(() => {
        if(!currentTime) return

        if (audio.currentTime > nextTime) {
            if (looping) {
                audio.currentTime = currentTime
            } else {
                index.current++
                setCurrentPlaying(index.current)
            }
        }
    }, [looping, audio, currentTime, nextTime])

    useEffect(() => {
        audio.addEventListener('timeupdate', handleEvent);

        return () => audio.removeEventListener('timeupdate', handleEvent);
    }, [looping, audio, handleEvent])

    const play = (m?: MantraType) => {
        if (m?.mantra) {
            console.log(m.time)
            const i = mantras.indexOf(m)
            index.current = i
            setCurrentPlaying(i)
            audio.currentTime = m.time
        }

        audio.play()
        setPlaying(true)
    }

    const stop = () => {
        audio.pause()
        setPlaying(false)
    }

    return {
        currentPlaying,
        play,
        stop,
        playing,
        looping,
        setLooping
    }
}