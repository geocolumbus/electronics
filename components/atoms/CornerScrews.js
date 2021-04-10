import { makeStyles } from '@material-ui/core/styles'
import PanelScrew from './PanelScrew'

const useStyles = makeStyles(theme => ({
    screwContainer: {
        position: 'relative'
    },
    tl: {
        position: 'absolute',
        transform: 'rotate(-11deg)',
        top: 5,
        left: 5
    },
    tr: {
        position: 'absolute',
        transform: 'rotate(13deg)',
        top: 5,
        right: 6
    },
    bl: {
        position: 'absolute',
        transform: 'rotate(-17deg)',
        bottom: 2,
        left: 5
    },
    br: {
        position: 'absolute',
        transform: 'rotate(25deg)',
        bottom: 2,
        right: 6
    }
}))

export default function CornerScrews({ children }) {
    const classes = useStyles()

    return <div className={classes.screwContainer}>
        {children}
        <div className={classes.tl}>
            <PanelScrew/>
        </div>
        <div className={classes.tr}>
            <PanelScrew/>
        </div>
        <div className={classes.bl}>
            <PanelScrew/>
        </div>
        <div className={classes.br}>
            <PanelScrew/>
        </div>
    </div>
}
