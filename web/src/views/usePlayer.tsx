import { useState, useEffect, useRef } from 'react';
import { MantraType } from '../types';
import { audioAtom, textAtom } from '../atom';
import { useAtom } from 'jotai';

export interface PlayerProps {
    currentPlaying: number,
    play: (m?: MantraType) => void
    stop: () => void
    playing: boolean
    looping: boolean
    setLooping: (b: boolean) => void
    isEnglish: boolean,
    setIsEnglish: (b: boolean) => void
}

export default function usePlayer() {
    const [currentPlaying, setCurrentPlaying] = useState(0)
    const [playing, setPlaying] = useState(false)
    const [looping, setLooping] = useState(false)
    const [isEnglish, setIsEnglish] = useState(false)
    const [audio] = useAtom(audioAtom)
    const [texts] = useAtom(textAtom)
    const index = useRef(0)

    if (!audio) throw new Error('Audio not found')

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
        setLooping,
        isEnglish,
        setIsEnglish
    }
}