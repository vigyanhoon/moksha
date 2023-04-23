import { createUseStyles } from 'react-jss'
import playIcon from '../assets/play.png'
import pause from '../assets/pause.png'
import loop from '../assets/loop.png'
import unloop from '../assets/stop.png'
import letterS from '../assets/letter-s.png'
import letterE from '../assets/letter-e.png'
import { useEffect } from 'react'
import usePlayer, { PlayerProps } from './usePlayer'

const useStyles = createUseStyles({
  container: {
    padding: 20
  },
  image: {
    height: 50,
    width: 50,
    margin: 10
  }
})

export const Controller = ({ play, stop, playing, looping, setLooping, isEnglish, setIsEnglish }: PlayerProps) => {

  const classes = useStyles()
  useEffect(() => {
    return () => {
      stop()
    }
  }, [])

  const playClicked = () => {
    if (playing) {
      stop()
    } else {
      play()
    }
  }

  return (
    <div className={classes.container}>
      <img onClick={playClicked} className={classes.image} src={playing ? pause : playIcon} alt='' />
      <img onClick={() => { setLooping(!looping) }} className={classes.image} src={looping ? unloop : loop} alt='' />
      <img onClick={() => { setIsEnglish(!isEnglish) }} className={classes.image} src={isEnglish ? letterS : letterE} alt='' />
    </div>
  )
}
