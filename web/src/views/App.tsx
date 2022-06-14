import React, { useEffect, useRef, useState } from 'react';
import { mantras } from '../mantras';
import mp3 from '../../assets/vishnu_sahasranamam.mp3'
import { Mantra } from './Mantra';
import { createUseStyles } from 'react-jss';
import { Player } from '../usePlayer';
import { Controller } from './Controller';

const useStyles = createUseStyles({
  app: {
    textAlign: 'center',
    backgroundColor: '#FFCC99'
  },
  container: {
    overflowY: 'scroll',
    height: '100vh',
  }
})

const audio = new Audio(mp3)

function App() {
  const classes = useStyles()
  const { currentPlaying, play, playing, stop } = Player(audio)

  return (
    <div className={classes.app}>
      <Controller play={play} stop={stop} playing={playing} />
      <div className={classes.container}>
        {mantras.map((m, i) => (
          <Mantra key={i} mantra={m} currentPlaying={currentPlaying} index={i} play={play} />
        ))}
      </div>
    </div>
  );
}

export default App;
