import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { Box } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    bvc: {
        margin: '0 auto',
        position: 'relative'
    },
    bevel: {
        borderStyle: 'solid'
    },
    inner: {
        borderWidth: 30,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderStyle: 'solid'
    },
    tr: {
        height: '0px',
        width: '100%',
        borderTop: 0,
        borderRightColor: 'transparent !important'
    },
    tl: {
        height: '0px',
        width: '100%',
        borderTop: 0,
        borderLeftColor: 'transparent !important'
    },
    br: {
        height: '0px',
        width: '100%',
        borderBottom: 0,
        borderRightColor: 'transparent !important'
    },
    bl: {
        height: '0px',
        width: '100%',
        borderBottom: 0,
        borderLeftColor: 'transparent !important'
    },
    noBevel: {
        height: '0px',
        width: '100%',
        borderBottom: 0
    },
    content: {
        position: 'absolute'
    }
}))

export default function BevelBox({ color, width, height, bevel, offset, children }) {
    const classes = useStyles()
    return <Box
        className={classes.bvc}
        style = {{
            width: `${width}px`,
            left: `${-bevel}px`,
            marginBottom: `${bevel}px`
        }}
    >
        <Box
            className={clsx(classes.bevel, classes.tl, classes.tr)}
            style={{
                borderColor: `${color}`,
                borderWidth: `${bevel}px`
            }}
        />
        <Box
            className={classes.inner}
            style={{
                borderColor: `${color}`,
                width: `${width}px`,
                height: `${height - 2 * bevel}px`,
                backgroundColor: `${color}`
            }}
        >
        </Box>
        <Box
            className={clsx(classes.bevel, classes.bl, classes.br)}
            style={{
                borderColor: `${color}`,
                borderWidth: `${bevel}px`
            }}
        />
        <Box className={classes.content} style={{
            top: `${offset}px`,
            left: `${offset}px`,
            zIndex: 10
        }}>{children}</Box>
    </Box>
}
