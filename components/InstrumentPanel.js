import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import Altimeter from './segdisplay/Altimeter'

const useStyles = makeStyles(theme => ({
    root: {
    }
}))

export default function InstrumentPanel() {

    const classes = useStyles()

    return <Box className={classes.root}>
        <Altimeter value={4000}/>
    </Box>
}
