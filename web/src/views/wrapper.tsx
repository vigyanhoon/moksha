import { Mantra } from './Mantra';
import { createUseStyles } from 'react-jss';
import { Controller } from './Controller';
import { useAtom } from 'jotai';
import { textAtom } from '../atom';

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

function Wrapper() {
  const classes = useStyles()
  const [texts] = useAtom(textAtom)

  return (
    <div className={classes.app}>
      <Controller />
      <div className={classes.container}>
        {texts.map((m, i) => (
          <Mantra key={i} text={m} index={i} />
        ))}
      </div>
    </div>
  );
}

export default Wrapper;
