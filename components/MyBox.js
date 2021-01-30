import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#ffc'
    }
}))

export default function MyBox() {

    const classes = useStyles()

    return <Box className={classes.root}>Box</Box>
}
