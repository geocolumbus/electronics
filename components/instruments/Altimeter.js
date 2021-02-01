import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import SegDisplay from '../segdisplay/SegDisplay'
import BevelBox from '../atoms/BevelBox'

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
        backgroundColor: '#fff'
    },
    bezelInner: {
        width: 180,
        height: 180,
        border: '2px solid black',
        borderRadius: 90,
        position: 'absolute',
        left: 3,
        top: 3,
        backgroundColor: '#444'
    },
    innerCircle: {
        width: 96,
        height: 96,
        border: '1px solid white',
        borderRadius: 90,
        position: 'absolute',
        left: 41,
        top: 40
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
        left: 89
    },
    tickNumbers: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 500
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
    hand1Container: {
        width: 4,
        height: 180,
        position: 'absolute',
        left: 88,
        top: -2,
        zIndex: 10
    },
    hand1: {
        width: '100%',
        height: 100,
        position: 'absolute',
        top: 15
    },
    hand2Container: {
        width: 10,
        height: 180,
        position: 'absolute',
        left: 84,
        top: -2,
        zIndex: 10
    },
    hand2: {
        width: '100%',
        height: 50,
        position: 'absolute',
        top: 44
    },
    hand3Container: {
        width: 10,
        height: 180,
        position: 'absolute',
        left: 84,
        top: -2,
        zIndex: 10
    },
    hand3: {
        width: '100%',
        height: 84,
        position: 'absolute',
        top: 2
    },
    segDisplay: {
        position: 'absolute',
        top: 77,
        left: 116,
        borderRadius: 6,
        overflow: 'hidden',
        width: 60
    }

}))

const tickMarks = (classes) => {
    const marks = []
    for (let i = 0; i < 100; i += 2) {
        const tickMark = <Box
            key = {i}
            className={classes.tickMarkContainer}
            style={{ transform: `rotate(${i * 3.6}deg )` }}
        >
            <Box className={classes.tickMark}/>
        </Box>
        const tickMarkSmall = <Box
            key = {i}
            className={classes.tickMarkContainerSmall}
            style={{ transform: `rotate(${i * 3.6}deg )` }}
        >
            <Box className={classes.tickMarkSmall}/>
        </Box>
        marks.push(i % 10 === 0 ? tickMark : tickMarkSmall)
    }
    return marks
}

const numbers = (classes) => {
    const tickNums = []
    for (let i = 0; i < 10; i++) {
        const tickNum = <Box
            key = {i}
            className={classes.tickNumbersContainer}
            style={{ transform: `rotate(${i * 36}deg)` }}
        >
            <Box
                className={classes.tickNumbers}
                style={{ transform: `rotate(${-i * 36}deg)` }}
            >{i}</Box>
        </Box>
        tickNums.push(tickNum)
    }
    return tickNums
}

const hand1 = (classes, val) => {
    return <Box className={classes.hand1Container} style = {{ transform: `rotate(${val}deg)` }}>
        <Box className={classes.hand1}>
            <svg width='100%' height='100%' viewBox='0,0,100,800' preserveAspectRatio='none'>
                <polygon points='50,0 100,100 100,450 0,450 0,100' stroke='white' strokeWidth='1' fill='white'/>
                <polygon points='0,450 100,450 100,800 0,800' stroke='black' strokeWidth='1' fill='black'/>
            </svg>
        </Box>
    </Box>
}

const hand2 = (classes, val) => {
    return <Box className={classes.hand2Container} style = {{ transform: `rotate(${val}deg)` }}>
        <Box className={classes.hand2}>
            <svg width='100%' height='100%' viewBox='0,0,100,800' preserveAspectRatio='none'>
                <polygon points='50,0 100,250 70,450 70,450 30,450 30,450 0,250' stroke='white' strokeWidth='1'
                    fill='white'/>
                <polygon points='30,450 70,450 70,800 30,800' stroke='black' strokeWidth='1' fill='black'/>
            </svg>
        </Box>
    </Box>
}

const hand3 = (classes, val) => {
    return <Box className={classes.hand3Container} style = {{ transform: `rotate(${val}deg)` }}>
        <Box className={classes.hand3}>
            <svg width='100%' height='100%' viewBox='0,0,100,800' preserveAspectRatio='none'>
                <polygon points='0,0 100,0 55,100 55,400 60,425 60,660 40,660 40,425 45,400 45,100' stroke='white'
                    strokeWidth='1' fill='white'/>
                <polygon points='40,660 60,660 60,800 40,800' stroke='black' strokeWidth='1' fill='black'/>
            </svg>
        </Box>
    </Box>
}

export default function Altimeter({ value }) {
    const classes = useStyles()
    let hand1val = 0
    let hand2val = 0
    let hand3val = 0

    if (isFinite(value)) {
        hand1val = value / 1000 * 360
        hand2val = value / 10000 * 360
        hand3val = value / 100000 * 360
    }

    return <BevelBox width={220} height={220} bevel={50} offset={12} color={'#bbb'}>
        <Box className={classes.frame}>
            <Box className={classes.bezel}>
                <Box className={classes.bezelInner}>
                    <Box className={classes.innerCircle}/>
                    {tickMarks(classes)}
                    {numbers(classes)}
                    <Box className={classes.centerPin}/>
                    {hand1(classes, hand1val)}
                    {hand2(classes, hand2val)}
                    {hand3(classes, hand3val)}
                    <Box className={classes.segDisplay}>
                        <SegDisplay digits={5} color='green' fontSize={0.4}>{value}</SegDisplay>
                    </Box>
                </Box>
            </Box>
        </Box>
    </BevelBox>
}
