import { makeStyles } from '@material-ui/core/styles'
import LedRow from '../components/leddisplay/LedRow'
import { useEffect, useState } from 'react'
import Bezel from '../components/atoms/Bezel'
import { Box } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    scale: {
        transformOrigin: 'top left',
        transform: 'scale(0.75)'
    }
}))

export default function Home() {

    const classes = useStyles()

    const [count, setCount] = useState(1)
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount > 254 ? 0 : prevCount + 1)
        }, 500)
        return () => clearInterval(interval)
    }, [])

    return (
        <Box className={classes.scale}>
            <Bezel>
                {[...Array(32).keys()].map(i => {
                    return <LedRow
                        keys={i}
                        bits={32}
                        color='blue'
                        count={count}
                    >
                        {Math.floor((2 ** 32) * Math.random())}
                    </LedRow>
                })}
            </Bezel>
        </Box>
    )
}
