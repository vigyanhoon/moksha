import { Mantra } from '../components/Mantra.js';
import { createUseStyles } from 'react-jss';
import { Controller } from '../components/Controller.js';
import usePlayer from '../hooks/usePlayer.js';
import {
    MantraResource,
} from "../mantraConfig.js";

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

const MantraPage = ({ resource }: { resource: MantraResource; }) => {
    const classes = useStyles()
    const props = usePlayer(resource);

    return (
        <div className={classes.app}>
            <Controller {...props} />
            <div className={classes.container}>
                {props.texts.map((m, i) => (
                    <Mantra key={i} text={m} index={i} {...props} />
                ))}
            </div>
        </div>
    );
};

export default MantraPage;