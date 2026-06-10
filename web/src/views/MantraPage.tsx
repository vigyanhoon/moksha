import { useMemo } from "react";
import { Mantra } from './Mantra';
import { createUseStyles } from 'react-jss';
import { Controller } from './Controller';
import usePlayer from './usePlayer';
import {
    mantraConfig,
    MantraResource,
} from "../mantraConfig";

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

type Props = {
    resource: MantraResource;
};

const MantraPage = ({ resource }: Props) => {
    const classes = useStyles()
    const selectedMantra = mantraConfig.find(
        (m) => m.resource === resource
    );

    const audioSrc = selectedMantra?.audio ?? "";
    const texts = selectedMantra?.text ?? [];

    const audio = useMemo(
        () => new Audio(audioSrc),
        [audioSrc]
    );

    const props = usePlayer(audio, texts);

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