import { makeStyles } from '@material-ui/core/styles'
import MeterRing from '../atoms/MeterRing'
import { Box } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    outer: {
        position: 'relative'
    },
    inner: {
        position: 'absolute'
    }

}))

export default function Meter() {

    const classes = useStyles()

    return <Box className={classes.outer}>
        <Box className={classes.inner}>
            <MeterRing
                width={440}
                height={440}
                radius={150}
                color={'black'}
                side={'outer'}
                min={-40}
                max={120}
                division={16}
                subDivision={5}
            />
        </Box>
        <Box className={classes.inner}>
            <MeterRing
                width={440}
                height={440}
                radius={140}
                color={'black'}
                side={'inner'}
                min={-40}
                max={50}
                division={9}
                subDivision={5}
            />
        </Box>
    </Box>
}
