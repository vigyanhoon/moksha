import { createUseStyles } from 'react-jss'
import { play as playIcon, pause, loop } from '../../assets'

const useStyles = createUseStyles({
    container: {
        padding: 20
    },
    image: {
        height: 50,
        width: 50,
        margin: 10
    }
})

export const Controller = ({ play, stop, playing }: { play: () => void, stop: () => void, playing: boolean }) => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <img onClick={playing ? stop : play} className={classes.image} src={playing ? pause : playIcon} />
            <img className={classes.image} src={loop} />
        </div>
    )
}