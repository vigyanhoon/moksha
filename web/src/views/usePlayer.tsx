import { useState, useEffect, useRef } from 'react';
import { MantraType } from '../types';

export default function usePlayer(audio: HTMLAudioElement, texts: MantraType[]) {
    const [currentPlaying, setCurrentPlaying] = useState(0)
    const [playing, setPlaying] = useState(false)
    const [looping, setLooping] = useState(false)

    const index = useRef(0)

    const handleEvent = () => {
        const currentTime = texts[index.current]?.time
        const nextTime = texts[index.current + 1]?.time
        if (!currentTime) return

        if (audio.currentTime > nextTime) {
            if (looping) {
                audio.currentTime = currentTime
            } else {
                index.current++
                setCurrentPlaying(index.current)
            }
        }
    }

    useEffect(() => {
        audio.addEventListener('timeupdate', handleEvent);

        return () => audio.removeEventListener('timeupdate', handleEvent);
    }, [looping, audio])

    const play = (m?: MantraType) => {
        if (m?.mantra) {
            const i = texts.indexOf(m)
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