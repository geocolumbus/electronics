import { makeStyles } from '@material-ui/core/styles'
import MeterRing from './MeterRing'

const useStyles = makeStyles(theme => ({
    outer: {
        position: 'relative'
    },
    inner: {
        position: 'absolute'
    },
    legendF: {
        position: 'absolute',
        left: 116,
        top: 342,
        color: '#FFF',
        fontSize: 24,
        width: 30
    },
    legendC: {
        position: 'absolute',
        left: 170,
        top: 288,
        color: '#FFF',
        fontSize: 24,
        width: 30
    }
}))

export default function TemperatureDial({ size, color }) {

    const classes = useStyles()
    const scale = size / 440

    return <div className={classes.outer} style={{ transform: `scale(${scale})` }}>
        <div className={classes.inner}>
            <MeterRing
                width={440}
                height={440}
                radius={160}
                color={color}
                side={'outer'}
                min={-40}
                max={120}
                division={16}
                subDivision={5}
                startAngle={-136.6875}
                endAngle={133.3125}
            />
        </div>
        <div className={classes.inner}>
            <MeterRing
                width={440}
                height={440}
                radius={150}
                color={color}
                side={'inner'}
                min={-40}
                max={50}
                division={9}
                subDivision={5}
                startAngle={-136.6875}
                endAngle={136.6875}
            />
        </div>
        <div className={classes.legendF}>ºF</div>
        <div className={classes.legendC}>ºC</div>
    </div>
}
