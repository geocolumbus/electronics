import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    off: {
        width: 24,
        height: 24,
        margin: 2,
        backgroundColor: '#555',
        borderRadius: '50%'
    },
    red: {
        width: 24,
        height: 24,
        margin: 2,
        backgroundColor: '#F00',
        borderRadius: '50%',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px, rgba(255, 0, 0, 0.5) 0 2px 12px'
    },
    yellow: {
        width: 24,
        height: 24,
        margin: 2,
        backgroundColor: '#FF0',
        borderRadius: '50%',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px, #FF0 0 2px 12px'
    },
    green: {
        width: 24,
        height: 24,
        margin: 2,
        backgroundColor: '#ABFF00',
        borderRadius: '50%',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #304701 0 -1px 9px, #89FF00 0 2px 12px'
    },
    blue: {
        width: 24,
        height: 24,
        margin: 2,
        backgroundColor: '#24E0FF',
        borderRadius: '50%',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #006 0 -1px 9px, #3F8CFF 0 2px 14px'
    }
}))

export default function Led({ color, on }) {
    const classes = useStyles()
    const colorClass = {
        off: classes.off,
        blue: classes.blue,
        red: classes.red,
        yellow: classes.yellow,
        green: classes.green
    }
    const displayClass = on ? colorClass[color] : colorClass.off

    return <Box className={displayClass}/>
}
