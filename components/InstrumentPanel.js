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
        }, 250)
        return () => clearInterval(interval)
    }, [])

    return <Box>
        <SegDisplay className={classes.root} alpha digits={8} color='green' fontSize={2}>{count}</SegDisplay>
        <SegDisplay color='red' hex className={classes.root}>{count}</SegDisplay>
        <SegDisplay color='white' octal className={classes.root}>{count}</SegDisplay>
        <SegDisplay color='blue' digits={16} className={classes.root} binary >{count}</SegDisplay>
        <SegDisplay color='orange' digits={4} className={classes.root}>{count / 10.0}</SegDisplay>
        <SegDisplay color='orange' fontSize={0.5} digits={16} className={classes.root}>{count}</SegDisplay>
        <SegDisplay color='blue' alpha fontSize={0.75} digits={32} className={classes.root}>George Campbell, Worthington, OH</SegDisplay>
    </Box>
}
