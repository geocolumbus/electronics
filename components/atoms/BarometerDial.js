import { makeStyles } from '@material-ui/core/styles'
import MeterRing from './MeterRing'

const useStyles = makeStyles(theme => ({
    outer: {
        position: 'relative'
    },
    inner: {
        position: 'absolute'
    },
    legend: {
        position: 'absolute',
        left: 170,
        top: 390,
        color: '#FFF',
        fontSize: 18,
        width: 130
    }
}))

export default function BarometerDial({ size, color }) {

    // 28.0535 31.00648

    const classes = useStyles()
    const scale = size / 440

    return <div className={classes.outer} style={{ transform: `scale(${scale})` }}>
        <div className={classes.inner}>
            <MeterRing
                width={440}
                height={440}
                radius={150}
                color={color}
                side={'outer'}
                min={950}
                max={1050}
                division={10}
                subDivision={5}
                startAngle={-130.185}
                endAngle={135.5832}
                fontSize={20}
            />
        </div>
        <div className={classes.inner}>
            <MeterRing
                width={440}
                height={440}
                radius={142}
                color={color}
                side={'inner'}
                min={28}
                max={31}
                division={3}
                subDivision={10}
                startAngle={-135}
                endAngle={135}
            />
        </div>
        <div className={classes.legend}>in. Hg / mbar</div>
    </div>
}
