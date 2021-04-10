import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({

    root: {
        color: 'white'
    }
}))

export default function VerticalMeter({ children }) {

    const classes = useStyles()

    return <div className={classes.root}>{children}</div>
}
