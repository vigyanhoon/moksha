import React from 'react';
import './App.css';
import {mantras, MantraType} from './mantras';
import {createUseStyles} from 'react-jss'
import mp3 from './vishnu_sahasranamam.mp3'

const useStyles = createUseStyles({
  body:{
    backgroundColor:'#FFCC99'
  },
  mantra: {
    fontSize: '1.5em',
    padding: '20px 0',
    whiteSpace: 'pre-wrap',
    userSelect: 'none',
    color: 'blue'
  }
})

let audio = new Audio(mp3)

const start = (time:number) => {
  if(audio.paused){
    audio.currentTime = time
    audio.play()
  } else {
    audio.pause()
  }
  
}

const Mantra = ({mantra}: {mantra:MantraType})=>{
  const classes = useStyles()
  const m = mantra.mantra
  const parts = m.split('। ')

  const selected = ()=> {
    start(mantra.time)
  }

  return (
    <div onClick={selected} className={`${classes.body} ${classes.mantra}`}>
      <div>{parts[0] + '।'}</div>
      <div>{parts[1]}</div>
      <div>{parts[2]}</div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      {mantras.map((m, i)=>(
        <Mantra key={i} mantra={m}/>
      ))}
    </div>
  );
}

export default App;
