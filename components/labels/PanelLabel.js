import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    label: {
        color: '#000',
        fontSize: 20,
        backgroundColor: '#b5a642',
        border: '2px solid #b5a642',
        margin: 2
    }
}))

export default function PanelLabel({ children }) {

    const classes = useStyles()

    return <div className={classes.label}>{children}</div>
}
