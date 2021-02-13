import { makeStyles } from '@material-ui/core/styles'
import MeterRing from './MeterRing'
import { Box } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    outer: {
        position: 'relative'
    },
    inner: {
        position: 'absolute'
    }

}))

export default function TemperatureDial({ size, color }) {

    const classes = useStyles()
    const scale = size / 440

    return <Box className={classes.outer} style={{ transform: `scale(${scale})` }}>
        <Box className={classes.inner}>
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
        </Box>
        <Box className={classes.inner}>
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
        </Box>
    </Box>
}
