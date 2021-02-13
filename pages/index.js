import { makeStyles } from '@material-ui/core/styles'
import LedRow from '../components/leddisplay/LedRow'
import { useEffect, useState } from 'react'
import Bezel from '../components/atoms/Bezel'
import { Box } from '@material-ui/core'
import Meter from '../components/instruments/Meter'

const useStyles = makeStyles(theme => ({
    root: {
        padding: 10
    }
}))

export default function Home() {

    const classes = useStyles()
    /*
    const [count, setCount] = useState(1)
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount > 254 ? 0 : prevCount + 1)
        }, 500)
        return () => clearInterval(interval)
    }, [])
*/
    return (
        <Box className={classes.root}>
            <Meter/>
        </Box>
    )
}
