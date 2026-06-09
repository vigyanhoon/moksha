import { Mantra } from './Mantra';
import { createUseStyles } from 'react-jss';
import { Controller } from './Controller';
import usePlayer from './usePlayer';
import { MantraType } from '../types';

const useStyles = createUseStyles({
  app: {
    textAlign: 'center',
    backgroundColor: '#FFCC99'
  },
  container: {
    overflowY: 'scroll',
    height: 'calc(100vh - 110px)'
  }
})

function Wrapper({audio, texts}: {audio: HTMLAudioElement, texts: MantraType[]}) {
  const classes = useStyles()

  const props = usePlayer(audio, texts)

  return (
    <div className={classes.app}>
      <Controller {...props} />
      <div className={classes.container}>
        {texts.map((m, i) => (
          <Mantra key={i} text={m} index={i} {...props} />
        ))}
      </div>
    </div>
  );
}

export default Wrapper;
