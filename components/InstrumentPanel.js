import { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import Altimeter from './segdisplay/Altimeter'

const useStyles = makeStyles(theme => ({
    root: {
    },
    bevelBox: {
        width: 200,
        height: 200,
        backgroundColor: 'lightblue'
    }
}))

export default function InstrumentPanel() {

    const classes = useStyles()
    const [count, setCount] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 50)
        }, 250)
        return () => clearInterval(interval)
    }, [])

    return <Box className={classes.root}>
        <Altimeter value={count}/>
    </Box>
}
