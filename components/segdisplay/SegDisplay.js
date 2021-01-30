import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
    display: {
        fontFamily: 'DSEG7Classic, sans-serif',
        backgroundColor: '#333',
        border: '2px solid lightgray',
        boxShadow: '2px 2px gray',
        position: 'relative'
    },
    background: {
        position: 'absolute',
        right: 4
    },
    data: {
        position: 'absolute',
        right: 4
    },
    onGreen: {
        color: 'lightgreen'
    },
    onRed: {
        color: 'orangered'
    },
    onBlue: {
        color: 'skyblue'
    },
    onOrange: {
        color: 'Orange'
    },
    dim: {
        filter: 'brightness(40%)'
    }

}))

export default function SegDisplay({ zeros, color, digits, fontSize, children }) {

    const classes = useStyles()
    let text = children
    digits = digits || 8
    fontSize = fontSize || 1

    if (isFinite(text)) {
        text = children.toString()

        if (zeros) {
            while (text.length < digits) {
                text = '0' + text
            }
        }
    }

    let onColor = classes.onGreen
    if (color === 'red') {
        onColor = classes.onRed
    } else if (color === 'blue') {
        onColor = classes.onBlue
    } else if (color === 'orange') {
        onColor = classes.onOrange
    }

    return <Box className={classes.display} style={{
        width: `calc(${digits * 1.62 * fontSize}rem + ${16}px)`,
        fontSize: `${fontSize * 2}rem`,
        height: 42 * fontSize + 14,
        paddingTop: 3
    }}>
        <Box className={clsx(classes.background, onColor, classes.dim)}>{'8'.repeat(digits)}</Box>
        <Box className={clsx(classes.data, onColor)}>{text}</Box>
    </Box>
}
