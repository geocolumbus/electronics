import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
    display: {
        backgroundColor: '#333',
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
        color: 'coral'
    },
    onBlue: {
        color: 'skyblue'
    },
    onOrange: {
        color: 'orange'
    },
    onWhite: {
        color: '#eee'
    },
    dim: {
        filter: 'brightness(30%)'
    }

}))

export default function SegDisplay({ alpha, zeros, color, digits, fontSize, hex, binary, octal, children }) {

    const classes = useStyles()
    let text = children
    digits = digits || 8
    fontSize = fontSize || 1

    if (isFinite(text)) {
        text = hex ? text.toString(16) : text
        text = octal ? text.toString(8) : text
        text = binary ? text.toString(2) : text
        text = !hex && !octal && !binary ? text.toString(10) : text

        if (zeros) {
            while (text.length < digits) {
                text = '0' + text
            }
        }

        text = text.length > digits ? text.substr(text.length - digits, text.length) : text
    }

    text = text.replace(/\s/g, `<div style="min-width: ${fontSize * 1.62}rem; display:inline-block; backgroundColor:red"></div>`)

    let onColor = classes.onGreen
    if (color === 'red') {
        onColor = classes.onRed
    } else if (color === 'blue') {
        onColor = classes.onBlue
    } else if (color === 'orange') {
        onColor = classes.onOrange
    } else if (color === 'white') {
        onColor = classes.onWhite
    }

    const fill = alpha ? '~'.repeat(digits) : '8'.repeat(digits)

    return <Box className={classes.display} style={{
        width: `calc(${digits * 1.62 * fontSize}rem + ${16}px)`,
        fontSize: `${fontSize * 2}rem`,
        height: 52 * fontSize + 1 - 0.7 * fontSize * fontSize,
        paddingTop: 3,
        fontFamily: alpha ? 'DSEG14Classic' : 'DSEG7Classic'
    }}>
        <Box className={clsx(classes.background, onColor, classes.dim)}>{fill}</Box>
        <Box className={clsx(classes.data, onColor)} dangerouslySetInnerHTML={{ __html: text }}/>
    </Box>
}
