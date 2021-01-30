import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    frame: {
        width: 200,
        height: 200,
        border: '2px solid black',
        position: 'relative',
        backgroundColor: '#eee'
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
        backgroundColor: '#333'
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
        top: 84,
        left: 83.5,
        backgroundColor: '#ddd',
        zIndex: 10
    },
    hand1: {
        width: 3,
        height: 66,
        backgroundColor: '#eee',
        position: 'absolute',
        top: 20
    },
    hand1Container: {
        width: 4,
        height: 180,
        position: 'absolute',
        left: 88
    },
    hand2: {
        width: 5,
        height: 60,
        backgroundColor: '#ff0',
        position: 'absolute',
        top: 25
    },
    hand2Container: {
        width: 4,
        height: 180,
        position: 'absolute',
        left: 87
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
        <Box className={classes.hand1}/>
    </Box>
}

const hand2 = (classes, val) => {
    return <Box className={classes.hand2Container} style = {{ transform: `rotate(${val}deg)` }}>
        <Box className={classes.hand2}/>
    </Box>
}

export default function Altimeter({ value }) {
    const classes = useStyles()
    let hand1val = 0
    let hand2val = 0

    if (isFinite(value)) {
        hand1val = value / 10000 * 360
        hand2val = value / 100000 * 360
    }

    return <Box className={classes.frame}>
        <Box className={classes.bezel}>
            <Box className={classes.bezelInner}>
                {tickMarks(classes)}
                {numbers(classes)}
                <Box className={classes.centerPin}/>
                {hand1(classes, hand1val)}
                {hand2(classes, hand2val)}
            </Box>
        </Box>
    </Box>
}
