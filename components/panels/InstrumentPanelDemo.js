import { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import Altimeter from '../instruments/Altimeter'
import SegDisplay from '../segdisplay/SegDisplay'
import Clock from '../instruments/Clock'
import Bezel from '../atoms/Bezel'
import FlipDisplay from '../flipclock/FlipDisplay'
import LedRow from '../leddisplay/LedRow'
import Temperature from "../instruments/Temperature"

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-around',
        padding: '10px',
        backgroundColor: '#888'
    },
    meter: {
        height: '220px',
        width: '220px'
    },
    bevelBox: {
        width: 200,
        height: 200,
        backgroundColor: 'lightblue'
    }
}))

export default function InstrumentPanelDemo() {

    const classes = useStyles()
    const [count, setCount] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 11)
        }, 250)
        return () => clearInterval(interval)
    }, [])

    return <Box className={classes.root}>
        <Box className={classes.meter}>
            <Altimeter value={count}/>
        </Box>
        <Box className={classes.meter}>
            <Clock/>
        </Box>
        <Box className={classes.meter}>
            <Temperature value={27}/>
        </Box>
        <Bezel>
            <SegDisplay>{count}</SegDisplay>
            <SegDisplay color='red'>{count * 7}</SegDisplay>
            <SegDisplay color='blue'>{count * 11}</SegDisplay>
            <SegDisplay alpha color='orange'>{count.toString(16)}</SegDisplay>
        </Bezel>
        <Bezel>
            <FlipDisplay value={Math.floor(count / 100)} digits={8}/>
        </Bezel>
        <Bezel>
            <LedRow bits={16} color='blue'>{count / 10}</LedRow>
        </Bezel>
    </Box>
}
