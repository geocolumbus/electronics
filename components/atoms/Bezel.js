import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import CornerScrews from './CornerScrews'

const useStyles = makeStyles(theme => ({
    bezelContainer: {
        display: 'inline-block'
    },
    bezelFrame: {
        borderWidth: 2,
        borderColor: theme.custom.outline.color,
        borderStyle: 'solid',
        borderRadius: 11
    },
    bezel: {
        borderWidth: 20,
        borderColor: theme.custom.bezel.color,
        borderStyle: 'solid',
        borderRadius: 9,
        position: 'relative'
    }
}))

export default function Bezel({ children }) {
    const classes = useStyles()

    return <Box className={classes.bezelContainer}>
        <CornerScrews>
            <Box className={classes.bezelFrame}>
                <Box className={classes.bezel}>{children}</Box>
            </Box>
        </CornerScrews>
    </Box>
}
