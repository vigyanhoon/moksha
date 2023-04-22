import { createUseStyles } from 'react-jss'
import { MantraType } from '../types'
import info from '../assets/info.png'
import { useState } from 'react'
import usePlayer from './usePlayer'

const useStyles = createUseStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    info: {
        width: '50px',
        height: '50px'
    },
    mantra: {
        fontSize: '1.5em',
        padding: '20px 0',
        whiteSpace: 'pre-wrap',
        userSelect: 'none',
    },
    meaning: {
        fontSize: '1.5em',
        padding: '20px',
        whiteSpace: 'pre-wrap',
        userSelect: 'none',
        textAlign: 'left'
    }
})

export const Mantra = ({ index, text }: { index: number, text: MantraType }) => {
    const classes = useStyles()
    const { currentPlaying, play } = usePlayer()
    const [showMantra, setShowMantra] = useState(false);
    const { mantra, meaning } = text
    const parts = mantra.split('। ')

    const color = currentPlaying === index ? 'red' : ''

    const Row = () => {
        if (!showMantra) {
            return (<div onClick={() => play(text)} className={classes.mantra} style={{ color }}>
                <div>{parts[0] + '।'}</div>
                <div>{parts[1]}</div>
                <div>{parts[2]}</div>
            </div>)
        }

        return (<div onClick={() => play(text)} className={classes.meaning} style={{ color }}>
            <div>{meaning}</div>
        </div>)
    }

    return (
        <div className={classes.container}>
            <img className={classes.info} onClick={() => setShowMantra(!showMantra)} src={info}></img>
            <Row />
        </div>
    )
}