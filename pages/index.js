import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import Barometer from '../components/instruments/Barometer'

const useStyles = makeStyles(theme => ({
    root: {
        padding: 10
    }
}))

export default function Home() {

    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <Barometer/>
        </Box>
    )
}
