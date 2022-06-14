import { useState, useEffect, useRef } from 'react';
import { mantras, MantraType } from './mantras';

export function Player(audio: HTMLAudioElement) {
    const [currentPlaying, setCurrentPlaying] = useState(0)
    const [playing, setPlaying] = useState(false)
    let index = useRef(0)

    function handleEvent(e: Event) {
        const nextTime = mantras[index.current + 1].time

        if (audio.currentTime > nextTime) {
            index.current++
            setCurrentPlaying(index.current)
        }
    }

    useEffect(() => {
        audio.addEventListener('timeupdate', handleEvent);

        return () => audio.removeEventListener('timeupdate', handleEvent);
    }, [])

    const play = (m?: MantraType) => {
        if (m?.mantra) {
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
        playing
    }
}