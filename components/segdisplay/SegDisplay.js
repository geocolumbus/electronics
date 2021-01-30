import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: { fontFamily: 'DSEG7Classic, sans-serif' }
}))

export default function SegDisplay({ children }) {

    const classes = useStyles()

    return <Box className={classes.root}>{children}</Box>
}
