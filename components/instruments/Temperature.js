import { makeStyles } from '@material-ui/core/styles'
import SegDisplay from '../segdisplay/SegDisplay'
import BevelBox from '../atoms/BevelBox'
import PanelScrew from '../atoms/PanelScrew'
import TemperatureDial from '../atoms/TemperatureDial'
import useSWR from 'swr'

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
        left: 66,
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
    return <div className={classes.hand1Container} style = {{ transform: `rotate(${val}deg)` }}>
        <div className={classes.hand1}>
            <svg width='100%' height='100%' viewBox='0,0,100,800' preserveAspectRatio='none'>
                <polygon points='50,0 100,100 100,450 0,450 0,100' stroke='white' strokeWidth='1' fill='red'/>
                <polygon points='0,450 100,450 100,800 0,800' stroke='black' strokeWidth='1' fill='white'/>
            </svg>
        </div>
    </div>
}

export default function Temperature() {
    const classes = useStyles()

    const updateTemp = () => {
        let temp = 0
        const { data, error } = useSWR('/api/weather', { refreshInterval: 1000 * 60 * 20 })
        if (data && data.temperature) {
            temp = parseInt(data.temperature, 10) + ' F'
        }
        if (error) {
            console.log(error)
        }
        return temp
    }
    const temp = updateTemp()

    const temperature = ({ temp }) => {
        return <div className={classes.frame}>
            <div className={classes.bezel}>
                <div className={classes.bezelInner}>
                    <div className={classes.temperatureDial}>
                        <TemperatureDial color={'white'} size={177}/>
                    </div>
                    <div className={classes.centerPin}/>
                    {hand1(classes, ((temp + 40) / 160) * 270 - 136.6875)}
                    <div className={classes.segDisplay}>
                        <SegDisplay digits={4} color='green' fontSize={0.4}>{temp}</SegDisplay>
                    </div>
                </div>
            </div>
        </div>
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
            return <div key={i} className={c[i]}><PanelScrew/></div>
        })
    }

    return <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: -2, left: -2 }}>
            <BevelBox width={224} height={224} bevel={54} color={'#555'}/>
        </div>
        <BevelBox width={220} height={220} bevel={54} offset={12}>
            {temperature({ temp })}
        </BevelBox>
        {screws()}
    </div>
}
