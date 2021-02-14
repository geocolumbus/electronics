import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import Temperature from '../components/instruments/Temperature'
import useSWR from 'swr'

const useStyles = makeStyles(theme => ({
    root: {
        padding: 10
    }
}))

export default function Home() {

    const classes = useStyles()

    const weather = useSWR('/api/weather')
    let temperature
    try { temperature = parseInt(weather.data.temperature, 10) } catch (e) {
        temperature = 0
    }

    return (
        <Box className={classes.root}>
            <Temperature value={temperature}/>
        </Box>
    )
}
