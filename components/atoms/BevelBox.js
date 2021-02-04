import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { Box } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    container: {
        overflow: 'hidden'
    },
    bvc: {
        margin: '0 auto',
        position: 'relative'
    },
    bevel: {
        borderStyle: 'solid',
        borderColor: theme.custom.bezel.color
    },
    inner: {
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderStyle: 'solid',
        borderColor: theme.custom.bezel.color,
        backgroundColor: theme.custom.bezel.color
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
    content: {
        position: 'absolute'
    }
}))

export default function BevelBox({ color, width, height, bevel, offset, children }) {
    const classes = useStyles()
    return <Box className={classes.container} style={{
        paddingLeft: `${bevel}px`,
        width: `${width + 2}px`,
        height: `${height + 2}px`
    }}>
        <Box
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
                style={color
                    ? {
                        width: `${width}px`,
                        height: `${height - 2 * bevel}px`,
                        borderColor: `${color}`,
                        backgroundColor: `${color}`
                    }
                    : {
                        width: `${width}px`,
                        height: `${height - 2 * bevel}px`
                    }}
            >
            </Box>
            <Box
                className={clsx(classes.bevel, classes.bl, classes.br)}
                style={color
                    ? {
                        borderColor: `${color}`,
                        borderWidth: `${bevel}px`
                    }
                    : { borderWidth: `${bevel}px` }}
            />
            <Box className={classes.content} style={{
                top: `${offset}px`,
                left: `${offset}px`,
                zIndex: 10
            }}>{children}</Box>
        </Box>
    </Box>
}
