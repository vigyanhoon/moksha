import { useMemo } from "react";
import { Mantra } from './Mantra';
import { createUseStyles } from 'react-jss';
import { Controller } from './Controller';
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

const MantraPage = (resource: string) => {
    const audio = useMemo(() => new Audio(`audio/${resource}.mp3`), [resource]);
    const classes = useStyles()
    const props = usePlayer(audio, `texts/${resource}.ts`)
    const texts = `texts/${resource}.ts`

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
};

export default MantraPage;