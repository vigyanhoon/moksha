import { createUseStyles } from 'react-jss'
import { MantraType } from '../mantras';

const useStyles = createUseStyles({
    mantra: {
        fontSize: '1.5em',
        padding: '20px 0',
        whiteSpace: 'pre-wrap',
        userSelect: 'none',
    }
})

interface MType {
    mantra: MantraType,
    currentPlaying: number,
    index: number,
    play: (m: MantraType) => void
}

export const Mantra = ({ mantra, currentPlaying, index, play }: MType) => {
    const classes = useStyles()
    const m = mantra.mantra
    const parts = m.split('। ')

    const color = currentPlaying === index ? 'red' : ''

    return (
        <div onClick={() => play(mantra)} className={classes.mantra} style={{ color }}>
            <div>{parts[0] + '।'}</div>
            <div>{parts[1]}</div>
            <div>{parts[2]}</div>
        </div>
    )
}