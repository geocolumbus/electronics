import { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import Altimeter from '../instruments/Altimeter'
import SegDisplay from '../segdisplay/SegDisplay'
import Clock from '../instruments/Clock'
import Bezel from '../atoms/Bezel'

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
            setCount(prevCount => prevCount + 2)
        }, 50)
        return () => clearInterval(interval)
    }, [])

    return <Box className={classes.root}>
        <Box className={classes.meter}>
            <Altimeter value={count}/>
        </Box>
        <Box className={classes.meter}>
            <Clock/>
        </Box>
        <Bezel>
            <SegDisplay>01234567</SegDisplay>
            <SegDisplay color='red'>9485868</SegDisplay>
            <SegDisplay color='blue'>29385</SegDisplay>
            <SegDisplay alpha color='orange'>$8ZMSRY</SegDisplay>
        </Bezel>
    </Box>
}
