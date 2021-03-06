import { makeStyles } from '@material-ui/core/styles'
import SegDisplay from '../segdisplay/SegDisplay'
import BevelBox from '../atoms/BevelBox'
import PanelScrew from '../atoms/PanelScrew'

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
    innerCircle: {
        width: 96,
        height: 96,
        border: '1px solid white',
        borderRadius: 90,
        position: 'absolute',
        left: 41,
        top: 40,
        zIndex: 50
    },
    tickMark: {
        width: 2,
        height: 12,
        backgroundColor: '#fff'
    },
    tickMarkSmall: {
        width: 1,
        height: 8,
        backgroundColor: '#ccc'
    },
    tickMarkContainer: {
        width: 2,
        height: 176,
        position: 'absolute',
        left: 88
    },
    tickMarkContainerSmall: {
        width: 1,
        height: 176,
        position: 'absolute',
        left: 88.5
    },
    tickNumbers: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 700
    },
    tickNumbersContainer: {
        width: 20,
        height: 156,
        position: 'absolute',
        top: 10,
        left: 82.5
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
    minuteHandContainer: {
        width: 4,
        height: 180,
        position: 'absolute',
        left: 87,
        top: -2,
        zIndex: 10
    },
    minuteHand: {
        width: '100%',
        height: 100,
        position: 'absolute',
        top: 15
    },
    hourHandContainer: {
        width: 10,
        height: 180,
        position: 'absolute',
        left: 84,
        top: -2,
        zIndex: 10
    },
    hourHand: {
        width: '100%',
        height: 50,
        position: 'absolute',
        top: 44
    },
    secondHandContainer: {
        width: 10,
        height: 180,
        position: 'absolute',
        left: 84,
        top: -2,
        zIndex: 10
    },
    secondHand: {
        width: '100%',
        height: 84,
        position: 'absolute',
        top: 2
    },
    segDisplay: {
        position: 'absolute',
        top: 77,
        left: 137,
        borderRadius: 6,
        overflow: 'hidden',
        width: 28
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
    }
}))

const tickMarks = (classes) => {
    const marks = []
    for (let i = 0; i < 60; i += 1) {
        const tickMark = <div
            key = {i}
            className={classes.tickMarkContainer}
            style={{ transform: `rotate(${i * 6}deg )` }}
        >
            <div className={classes.tickMark}/>
        </div>
        const tickMarkSmall = <div
            key = {i}
            className={classes.tickMarkContainerSmall}
            style={{ transform: `rotate(${i * 6}deg )` }}
        >
            <div className={classes.tickMarkSmall}/>
        </div>
        marks.push(i % 5 === 0 ? tickMark : tickMarkSmall)
    }
    return marks
}

const numbers = (classes) => {
    const tickNums = []
    for (let i = 0; i < 12; i++) {
        const tickNum = <div
            key = {i}
            className={classes.tickNumbersContainer}
            style={{ transform: i < 9 ? `rotate(${i * 30 + 30}deg)` : `rotate(${i * 30 + 23}deg)` }}
        >
            <div
                className={classes.tickNumbers}
                style={{ transform: i < 9 ? `rotate(${-i * 30 - 30}deg)` : `rotate(${-i * 30 - 23}deg)` }}
            >{i + 1}</div>
        </div>
        tickNums.push(tickNum)
    }
    return tickNums
}

const secondHand = (classes, val) => {
    return <div
        id='secondHandContainer'
        className={classes.secondHandContainer}
        style = {{ transform: `rotate(${val}deg)` }}>
        <div className={classes.secondHand}>
            <svg width='100%' height='100%' viewBox='0,0,100,800' preserveAspectRatio='none'>
                <polygon points='0,0  100,0  55,100  55,400  60,425  60,660  40,660  40,425  45,400  45,100' stroke='red'
                    strokeWidth='1' fill='red'/>
                <polygon points='40,660 60,660 60,800 40,800' stroke='black' strokeWidth='1' fill='black'/>
            </svg>
        </div>
    </div>
}

const minuteHand = (classes, val) => {
    return <div
        id='minuteHandContainer'
        className={classes.minuteHandContainer}
        style = {{ transform: `rotate(${val}deg)` }}>
        <div className={classes.minuteHand}>
            <svg width='100%' height='100%' viewBox='0,0,100,800' preserveAspectRatio='none'>
                <polygon points='50,0 100,100 100,450 0,450 0,100' stroke='white' strokeWidth='1' fill='white'/>
                <polygon points='0,450 100,450 100,800 0,800' stroke='black' strokeWidth='1' fill='black'/>
            </svg>
        </div>
    </div>
}

const hourHand = (classes, val) => {
    return <div
        id='hourHandContainer'
        className={classes.hourHandContainer}
        style = {{ transform: `rotate(${val}deg)` }}>
        <div className={classes.hourHand}>
            <svg width='100%' height='100%' viewBox='0,0,100,800' preserveAspectRatio='none'>
                <polygon points='50,0 100,250 70,450 70,450 30,450 30,450 0,250' stroke='white' strokeWidth='1'
                    fill='white'/>
                <polygon points='30,450 70,450 70,800 30,800' stroke='black' strokeWidth='1' fill='black'/>
            </svg>
        </div>
    </div>
}

export default function Clock() {
    const classes = useStyles()
    const date = new Date()
    const seconds = date.getSeconds()
    const minutes = date.getMinutes()
    let hours = date.getHours()
    const ampm = hours > 11 ? 'pm' : 'am'
    hours = hours > 12 ? hours - 12 : hours

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

    const clock = ({ minutes, hours, ampm }) => {
        return <div className={classes.frame}>
            <div className={classes.bezel}>
                <div className={classes.bezelInner}>
                    <div className={classes.innerCircle}/>
                    {tickMarks(classes)}
                    {numbers(classes)}
                    <div className={classes.centerPin}/>
                    {secondHand(classes, seconds * 6)}
                    {minuteHand(classes, (minutes + seconds / 60) * 6)}
                    {hourHand(classes, (hours + minutes / 60 + seconds / 3600) * 30)}
                    <div id='segDisplay' className={classes.segDisplay}>
                        <SegDisplay
                            digits={2}
                            color='orange'
                            fontSize={0.4}
                            alpha
                        >{ampm}</SegDisplay>
                    </div>
                </div>
            </div>
            {/* updateClock() */}
        </div>
    }

    return <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: -2, left: -2 }}>
            <BevelBox width={224} height={224} bevel={54} color={'#555'}/>
        </div>
        <BevelBox width={220} height={220} bevel={54} offset={12}>
            {clock({ minutes, hours, ampm })}
        </BevelBox>
        {screws()}
    </div>
}
