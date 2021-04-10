import { makeStyles } from '@material-ui/core/styles'
import Clock from '../instruments/Clock'
import Bezel from '../atoms/Bezel'
import Temperature from '../instruments/Temperature'
import Barometer from '../instruments/Barometer'
import CurrentWeather from '../instruments/CurrentWeather'
import FutureWeather from '../instruments/FutureWeather'
import FlipDisplay from '../flipclock/FlipDisplay'
import LedRow from '../leddisplay/LedRow'
import { useEffect, useState } from 'react'
import PanelLabel from '../labels/PanelLabel'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-around',
        alignContent: 'space-around',
        padding: '10px',
        backgroundColor: 'slategrey',
        borderRadius: 9,
        marginTop: '8vh',
        paddingTop: 20,
        width: 1024,
        height: 680
    },
    meter: {
        transform: 'scale(1.36)',
        marginTop: 30,
        marginBottom: 40
    },
    ledDisplay: {
        transform: 'scale(1.035)'
    },
    label: {
        width: '100%',
        border: 'thin solid red'
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

    return <div className={classes.root}>
        <div className={classes.meter}>
            <Clock/>
        </div>
        <div className={classes.meter}>
            <Temperature/>
        </div>
        <div className={classes.meter}>
            <Barometer/>
        </div>
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
            <PanelLabel>Linux Time</PanelLabel>
        </Bezel>
        <div className={classes.ledDisplay}>
            <Bezel>
                <LedRow bits={31} color='yellow'>{time}</LedRow>
            </Bezel>
        </div>
    </div>
}
