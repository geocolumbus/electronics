import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useEffect, useState } from 'react'

const useStyles = makeStyles(theme => ({
    flipContainer: {
        height: 40,
        width: 28,
        overflow: 'hidden',
        backgroundColor: '#333',
        position: 'relative'
    },
    flipTop: {
        position: 'absolute',
        height: 18,
        width: 28,
        left: 0.6,
        overflow: 'hidden'
    },
    flipBottom: {
        position: 'absolute',
        height: 20,
        width: 28,
        top: 19,
        left: 0.6,
        overflow: 'hidden'
    },
    flipNumberTop: {
        position: 'absolute',
        height: 40,
        width: 28,
        fontSize: 48,
        color: '#eee',
        marginTop: -14,
        backgroundColor: '#333'
    },
    flipNumberBottom: {
        position: 'absolute',
        height: 56,
        width: 28,
        fontSize: 48,
        color: '#eee',
        marginTop: -33,
        backgroundColor: '#333'
    }
}))

export default function FlipNumber({ value }) {

    const classes = useStyles()
    const [scale, setScale] = useState(1)
    const startValue = (parseInt(value, 10) - 1).toString()
    const endValue = value

    useEffect(() => {
        const interval = setInterval(() => {
            setScale(prevScale => {
                return prevScale <= 0 ? 0 : prevScale - 0.15
            })
        }, 100)
        return () => clearInterval(interval)
    }, [])

    const flipTop = ({ startValue, endValue }) => {
        const scale1 = scale > 0.5 ? (scale - 0.5) * 2 : 0
        return <Box className={classes.flipTop}>
            <Box
                className={classes.flipNumberTop}
                style={{
                    transform: `scaleY(${scale1})`,
                    marginTop: `${-14 * scale1}px`,
                    zIndex: 10
                }}
            >{startValue}</Box>
            <Box className={classes.flipNumberTop}>{endValue}</Box>
        </Box>
    }

    const flipBottom = ({ startValue, endValue }) => {
        let scale2 = scale <= 0.5 ? scale * 2 : 1
        scale2 = scale2 < 0 ? 0 : scale2
        return <Box className={classes.flipBottom}>
            <Box
                className={classes.flipNumberBottom}
                style={{
                    transform: `scaleY(${(1 - scale2)})`,
                    zIndex: 10
                }}
            >{endValue}</Box>
            <Box className={classes.flipNumberBottom}>{startValue}</Box>
        </Box>
    }

    return <Box className={classes.flipContainer}>
        {flipTop({ startValue, endValue })}
        {flipBottom({ startValue, endValue })}
    </Box>
}
