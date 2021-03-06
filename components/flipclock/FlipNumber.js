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
    const [currentValue, setCurrentValue] = useState()
    const [previousValue, setPreviousValue] = useState()

    if (currentValue !== value) {
        setScale(1)
        setPreviousValue(currentValue)
        setCurrentValue(value)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setScale(prevScale => {
                return prevScale <= 0 ? 0 : prevScale - 0.25
            })
        }, 100)
        return () => clearInterval(interval)
    }, [scale])

    const flipTop = ({ previousValue, currentValue }) => {
        const scale1 = scale > 0.5 ? (scale - 0.5) * 2 : 0
        return <div className={classes.flipTop}>
            <div
                className={classes.flipNumberTop}
                style={{
                    transform: `scaleY(${scale1})`,
                    marginTop: `${-14 * scale1}px`,
                    zIndex: 10
                }}
            >{previousValue}</div>
            <div className={classes.flipNumberTop}>{currentValue}</div>
        </div>
    }

    const flipBottom = ({ previousValue, currentValue }) => {
        let scale2 = scale <= 0.5 ? scale * 2 : 1
        scale2 = scale2 < 0 ? 0 : scale2
        return <div className={classes.flipBottom}>
            <div
                className={classes.flipNumberBottom}
                style={{
                    transform: `scaleY(${(1 - scale2)})`,
                    zIndex: 10
                }}
            >{currentValue}</div>
            <div className={classes.flipNumberBottom}>{previousValue}</div>
        </div>
    }

    return <div className={classes.flipContainer}>
        {flipTop({ previousValue, currentValue })}
        {flipBottom({ previousValue, currentValue })}
    </div>
}
