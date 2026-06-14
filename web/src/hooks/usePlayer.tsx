import { useState, useEffect, useRef } from 'react';
import { MantraType } from '../types.js';
import { mantraConfig, MantraResource } from '../mantraConfig.js';

export default function usePlayer(resource: MantraResource) {
    const [currentPlaying, setCurrentPlaying] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [looping, setLooping] = useState(false);
    const [isEnglish, setIsEnglish] = useState(false);

    const index = useRef(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const selectedMantra = mantraConfig.find(
        (m) => m.resource === resource
    );

    const audioSrc = selectedMantra?.audio ?? "";
    const texts = selectedMantra?.text ?? [];

    useEffect(() => {
        audioRef.current = new Audio(audioSrc);

        return () => {
            audioRef.current?.pause();
            audioRef.current = null;
        };
    }, [audioSrc]);

    const getAudio = () => {
        if (!audioRef.current) {
            throw new Error('Audio not initialized');
        }

        return audioRef.current;
    };

    const handleEvent = () => {
        const audio = getAudio();

        const currentTime = texts[index.current]?.time;
        const endTime = texts[index.current]?.endTime;
        const nextTime = texts[index.current + 1]?.time;

        if (currentTime == null) return;

        if (looping) {
            const end = endTime ?? nextTime;

            if (end != null && audio.currentTime > end) {
                audio.currentTime = currentTime;
            }
        } else {
            if (nextTime != null && audio.currentTime > nextTime) {
                index.current++;
                setCurrentPlaying(index.current);
            }
        }
    };

    useEffect(() => {
        const audio = getAudio();

        audio.addEventListener('timeupdate', handleEvent);

        return () => {
            audio.removeEventListener('timeupdate', handleEvent);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [looping]);

    const play = (m?: MantraType) => {
        const audio = getAudio();

        if (m?.mantra) {
            const i = texts.indexOf(m);

            index.current = i;
            setCurrentPlaying(i);

            audio.currentTime = m.time;
        }

        audio.play();
        setPlaying(true);
    };

    const stop = () => {
        const audio = getAudio();

        audio.pause();
        setPlaying(false);
    };

    return {
        currentPlaying,
        play,
        stop,
        playing,
        looping,
        setLooping,
        isEnglish,
        setIsEnglish,
        texts
    };
}