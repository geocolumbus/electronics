import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SegDisplay from './segdisplay/SegDisplay'
import { Box } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#ffc'
    }
}))

export default function InstrumentPanel() {

    const classes = useStyles()
    const [count, setCount] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 100)
        return () => clearInterval(interval)
    }, [])

    return <Box>
        <SegDisplay className={classes.root} digits={4} zeros color='green' fontSize={2}>{count}</SegDisplay>
        <SegDisplay color='red' className={classes.root}>{count}</SegDisplay>
        <SegDisplay color='blue' className={classes.root}>{count}</SegDisplay>
        <SegDisplay color='blue' digits={16} className={classes.root}>A454B43</SegDisplay>
        <SegDisplay color='orange' className={classes.root}>{count}</SegDisplay>
        <SegDisplay color='orange' fontSize={0.5} digits={16} className={classes.root}>{count}</SegDisplay>
    </Box>
}
