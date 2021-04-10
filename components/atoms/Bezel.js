import { makeStyles } from '@material-ui/core/styles'
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

    return <div className={classes.bezelContainer}>
        <CornerScrews>
            <div className={classes.bezelFrame}>
                <div className={classes.bezel}>{children}</div>
            </div>
        </CornerScrews>
    </div>
}
