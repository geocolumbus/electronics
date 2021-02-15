import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import Clock from '../instruments/Clock'
import Bezel from '../atoms/Bezel'
import Temperature from '../instruments/Temperature'
import Barometer from '../instruments/Barometer'
import CurrentWeather from '../instruments/CurrentWeather'
import FutureWeather from '../instruments/FutureWeather'
import FlipDisplay from '../flipclock/FlipDisplay'
import LedRow from '../leddisplay/LedRow'
import { useEffect, useState } from 'react'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-around',
        alignContent: 'space-around',
        padding: '10px',
        backgroundColor: '#78A',
        height: '83vh',
        borderRadius: 9,
        marginTop: 10,
        paddingTop: 20
    },
    meter: {
        transform: 'scale(1.25)',
        margin: '10px 0',
    }
}))

export default function InstrumentPanelDemo() {

    const classes = useStyles()

    const [time, setTime] = useState()
    const [date, setDate] = useState()
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    useEffect(() => {
        const interval = setInterval(() => {
            const dt = new Date()
            setTime(Math.floor(dt.getTime() / 1000))
            const month = months[dt.getMonth()]
            const day = dt.getDate()
            const year = dt.getFullYear()
            setDate(`${month} ${day}, ${year}`)
        }, 1000)
        return () => clearInterval(interval)
    }, [time, date])

    return <Box className={classes.root}>
        <Box className={classes.meter}>
            <Clock/>
        </Box>
        <Box className={classes.meter}>
            <Temperature/>
        </Box>
        <Box className={classes.meter}>
            <Barometer/>
        </Box>
        <Bezel>
            <FlipDisplay digits={12}>{date}</FlipDisplay>
        </Bezel>
        <Bezel>
            <CurrentWeather color={'green'} />
        </Bezel>
        <Bezel>
            <FutureWeather color={'green'} />
        </Bezel>
        <Bezel>
            <LedRow bits={32} color='yellow'>{time}</LedRow>
        </Bezel>
    </Box>
}
