import { Mantra } from './Mantra';
import { createUseStyles } from 'react-jss';
import usePlayer from './usePlayer';
import { Controller } from './Controller';
import { MantraType } from '../types';

const useStyles = createUseStyles({
  app: {
    textAlign: 'center',
    backgroundColor: '#FFCC99'
  },
  container: {
    overflowY: 'scroll',
    height: 'calc(100vh - 110px)',
  }
})

interface WrapperType {
  audio: HTMLAudioElement;
  texts: MantraType[]
}

function Wrapper({ texts, audio }: WrapperType) {
  const classes = useStyles()
  const { currentPlaying, play, stop, playing, looping, setLooping } = usePlayer(audio, texts)

  const props = { currentPlaying, play, playing, stop, looping, setLooping }

  return (
    <div className={classes.app}>
      <Controller {...props} />
      <div className={classes.container}>
        {texts.map((m, i) => (
          <Mantra key={i} mantra={m} currentPlaying={currentPlaying} index={i} play={play} />
        ))}
      </div>
    </div>
  );
}

export default Wrapper;
