import { Mantra } from './Mantra';
import { createUseStyles } from 'react-jss';
import { Controller } from './Controller';
import { useAtom } from 'jotai';
import { textAtom } from '../atom';
import usePlayer from './usePlayer';

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

function Wrapper() {
  const classes = useStyles()
  const [texts] = useAtom(textAtom)

  const props = usePlayer()

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
