import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        width: 300,
        height: 300,
        borderRadius: 150,
        border: '2px solid black',
        backgroundColor: 'lightblue'
    }

}))

export default function Meter() {

    const classes = useStyles()

    return <Box className={classes.root}></Box>
}
