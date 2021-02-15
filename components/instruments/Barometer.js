import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import SegDisplay from '../segdisplay/SegDisplay'
import BevelBox from '../atoms/BevelBox'
import PanelScrew from '../atoms/PanelScrew'
import useSWR from 'swr'
import BarometerDial from '../atoms/BarometerDial'

const useStyles = makeStyles(theme => ({
    frame: {
        width: 200,
        height: 200,
        position: 'relative'
    },
    bezel: {
        width: 190,
        height: 190,
        border: '2px solid black',
        borderRadius: 95,
        position: 'absolute',
        left: 3,
        top: 3,
        backgroundColor: '#ddd'
    },
    bezelInner: {
        width: 180,
        height: 180,
        border: '2px solid #444',
        borderRadius: 90,
        position: 'absolute',
        left: 3,
        top: 3,
        backgroundColor: theme.custom.dial.color
    },
    centerPin: {
        width: 12,
        height: 12,
        borderRadius: 6,
        position: 'absolute',
        top: 82,
        left: 83.5,
        backgroundColor: '#ccc',
        zIndex: 20
    },
    hand1Container: {
        width: 4,
        height: 180,
        position: 'absolute',
        left: 87,
        top: -2,
        zIndex: 10
    },
    hand1: {
        width: '100%',
        height: 83,
        position: 'absolute',
        top: 26
    },
    segDisplay: {
        position: 'absolute',
        top: 134,
        left: 56,
        borderRadius: 6,
        overflow: 'hidden',
        width: 60
    },
    screw1: {
        position: 'absolute',
        top: 49,
        left: 12,
        transform: 'rotate(25deg)'
    },
    screw2: {
        position: 'absolute',
        top: 12,
        left: 49,
        transform: 'rotate(-8deg)'
    },
    screw3: {
        position: 'absolute',
        top: 49,
        left: 197,
        transform: 'rotate(-11deg)'
    },
    screw4: {
        position: 'absolute',
        top: 12,
        left: 162,
        transform: 'rotate(7deg)'
    },
    screw5: {
        position: 'absolute',
        top: 161,
        left: 12,
        transform: 'rotate(17deg)'
    },
    screw6: {
        position: 'absolute',
        top: 196,
        left: 49,
        transform: 'rotate(-16deg)'
    },
    screw7: {
        position: 'absolute',
        top: 161,
        left: 197,
        transform: 'rotate(-33deg)'
    },
    screw8: {
        position: 'absolute',
        top: 196,
        left: 162,
        transform: 'rotate(7deg)'
    },
    temperatureDial: {
        position: 'absolute'
    }
}))

const hand1 = (classes, val) => {
    return <Box className={classes.hand1Container} style = {{ transform: `rotate(${val}deg)` }}>
        <Box className={classes.hand1}>
            <svg width='100%' height='100%' viewBox='0,0,100,800' preserveAspectRatio='none'>
                <polygon points='50,0 100,100 100,450 0,450 0,100' stroke='white' strokeWidth='1' fill='red'/>
                <polygon points='0,450 100,450 100,800 0,800' stroke='black' strokeWidth='1' fill='white'/>
            </svg>
        </Box>
    </Box>
}

export default function Barometer() {
    const classes = useStyles()

    const updatePressure = () => {
        let pressure = 28
        const { data, error } = useSWR('/api/weather', { refreshInterval: 1000 * 60 * 20 })
        if (data && data.pressure) {
            pressure = parseFloat(data.pressure)
        }
        if (error) {
            console.log(error)
        }
        return pressure
    }
    const pressure = updatePressure()

    const temperature = ({ temp }) => {
        return <Box className={classes.frame}>
            <Box className={classes.bezel}>
                <Box className={classes.bezelInner}>
                    <Box className={classes.temperatureDial}>
                        <BarometerDial color={'white'} size={177}/>
                    </Box>
                    <Box className={classes.centerPin}/>
                    {hand1(classes, ((pressure - 28) / 3) * 270 - 135)}
                    <Box className={classes.segDisplay}>
                        <SegDisplay digits={5} color='green' fontSize={0.4}>{Math.floor(pressure * 100) / 100}</SegDisplay>
                    </Box>
                </Box>
            </Box>
        </Box>
    }

    const screws = () => {
        const c = [
            classes.screw1,
            classes.screw2,
            classes.screw3,
            classes.screw4,
            classes.screw5,
            classes.screw6,
            classes.screw7,
            classes.screw8
        ]
        return [...Array(8).keys()].map(i => {
            return <Box key={i} className={c[i]}><PanelScrew/></Box>
        })
    }

    return <Box style={{ position: 'relative' }}>
        <Box style={{ position: 'absolute', top: -2, left: -2 }}>
            <BevelBox width={224} height={224} bevel={54} color={'#555'}/>
        </Box>
        <BevelBox width={220} height={220} bevel={54} offset={12}>
            {temperature({ temp: pressure })}
        </BevelBox>
        {screws()}
    </Box>
}
