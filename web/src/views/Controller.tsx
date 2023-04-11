import { createUseStyles } from 'react-jss'
// import { play as playIcon, pause, loop, unloop } from '../assets'
import playIcon from '../assets/play.png'
import pause from '../assets/pause.png'
import loop from '../assets/loop.png'
import unloop from '../assets/stop.png'

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

interface CType {
  play: () => void
  stop: () => void
  playing: boolean
  looping: boolean
  setLooping: (b: boolean) => void
}

export const Controller = ({ play, stop, playing, looping, setLooping }: CType) => {
  const classes = useStyles()

  return (
        <div className={classes.container}>
            <img onClick={playing ? stop : play} className={classes.image} src={playing ? pause : playIcon} alt='' />
            <img onClick={() => { setLooping(!looping) }} className={classes.image} src={looping ? unloop : loop} alt='' />
        </div>
  )
}
