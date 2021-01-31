import { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import Altimeter from './segdisplay/Altimeter'
import BevelBox from './segdisplay/BevelBox'

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
        }, 60000)
        return () => clearInterval(interval)
    }, [])

    return <Box className={classes.root}>
        {/* <Altimeter value={count}/> */}
        <BevelBox width={140} height={140} bevel={40} color='lightgreen'>
            <Box style={{
                width: 100,
                height: 100,
                backgroundColor: 'lightgreen'
            }}/>
        </BevelBox>
    </Box>
}
