import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import PanelScrew from './PanelScrew'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
    screwContainer: {
        position: 'relative',
        display: 'inline-block',
        margin: 0,
        padding: 0
    },
    screw: {
        position: 'absolute',
        transform: 'rotate(25deg)'
    },
    tl: {
        top: 5,
        left: 5
    },
    tr: {
        top: 5,
        right: 6
    },
    bl: {
        bottom: 6,
        left: 5
    },
    br: {
        bottom: 6,
        right: 6
    }
}))

export default function CornerScrews({ children }) {
    const classes = useStyles()

    return <Box className={classes.screwContainer}>
        {children}
        <Box className={clsx(classes.screw, classes.tl)}>
            <PanelScrew/>
        </Box>
        <Box className={clsx(classes.screw, classes.tr)}>
            <PanelScrew/>
        </Box>
        <Box className={clsx(classes.screw, classes.bl)}>
            <PanelScrew/>
        </Box>
        <Box className={clsx(classes.screw, classes.br)}>
            <PanelScrew/>
        </Box>
    </Box>
}
