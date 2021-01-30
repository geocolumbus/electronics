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
        fontWeight: 700
    },
    tickNumbersContainer: {
        width: 20,
        height: 156,
        position: 'absolute',
        top: 10,
        left: 82
    },
    centerPin: {
        width: 12,
        height: 12,
        borderRadius: 6,
        position: 'absolute',
        top: 84,
        left: 84,
        backgroundColor: '#ddd'
    }
}))

const tickMarks = (classes) => {
    const marks = []
    for (let i = 0; i < 100; i += 2) {
        const tickMark = <Box
            className={classes.tickMarkContainer}
            key={i}
            style={{ transform: `rotate(${i * 3.6}deg )` }}
        >
            <Box className={classes.tickMark}/>
        </Box>
        const tickMarkSmall = <Box
            className={classes.tickMarkContainerSmall}
            key={i}
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

export default function Altimeter() {
    const classes = useStyles()

    return <Box className={classes.frame}>
        <Box className={classes.bezel}>
            <Box className={classes.bezelInner}>
                {tickMarks(classes)}
                {numbers(classes)}
                <Box className={classes.centerPin}/>
            </Box>
        </Box>
    </Box>
}
