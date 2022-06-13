import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { mantras, MantraType } from './mantras';
import { createUseStyles } from 'react-jss'
import mp3 from './vishnu_sahasranamam.mp3'

const useStyles = createUseStyles({
  body: {
    backgroundColor: '#FFCC99'
  },
  mantra: {
    fontSize: '1.5em',
    padding: '20px 0',
    whiteSpace: 'pre-wrap',
    userSelect: 'none',
  }
})

const audio = new Audio(mp3)


const Mantra = ({ mantra, currentPlaying, index, play }: { mantra: MantraType, currentPlaying: number, index: number, play: (m: MantraType) => void }) => {
  const classes = useStyles()
  const m = mantra.mantra
  const parts = m.split('। ')

  const color = currentPlaying === index ? 'red' : ''

  return (
    <div onClick={() => play(mantra)} className={`${classes.body} ${classes.mantra}`} style={{ color }}>
      <div>{parts[0] + '।'}</div>
      <div>{parts[1]}</div>
      <div>{parts[2]}</div>
    </div>
  )
}

function App() {
  const [currentPlaying, setCurrentPlaying] = useState(0)
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

  const play = (m: MantraType) => {
    const i = mantras.indexOf(m)
    index.current = i
    setCurrentPlaying(i)
    audio.currentTime = m.time
    audio.play()
  }

  return (
    <div className="App">
      {mantras.map((m, i) => (
        <Mantra key={i} mantra={m} currentPlaying={currentPlaying} index={i} play={play} />
      ))}
    </div>
  );
}

export default App;
