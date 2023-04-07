import { mantras } from '../mantras';
import mp3 from '../../assets/vishnu_sahasranamam.mp3'
import { Mantra } from './Mantra';
import { createUseStyles } from 'react-jss';
import usePlayer from '../usePlayer';
import { Controller } from './Controller';

const useStyles = createUseStyles({
  app: {
    textAlign: 'center',
    backgroundColor: '#FFCC99'
  },
  container: {
    overflowY: 'scroll',
    height: 'calc(100vh - 50px)',
  }
})

const audio = new Audio(mp3)

function App() {
  const classes = useStyles()
  const { currentPlaying, play, stop, playing, looping, setLooping } = usePlayer(audio)

  const props = { currentPlaying, play, playing, stop, looping, setLooping }

  return (
    <div className={classes.app}>
      <Controller {...props} />
      <div className={classes.container}>
        {mantras.map((m, i) => (
          <Mantra key={i} mantra={m} currentPlaying={currentPlaying} index={i} play={play} />
        ))}
      </div>
    </div>
  );
}

export default App;
