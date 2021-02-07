import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import FlipDisplay from '../components/flipclock/FlipDisplay'
import { useEffect, useState } from 'react'

const useStyles = makeStyles(theme => ({
    container: {
        maxWidth: 1080
    }
}))

export default function Home() {

    const classes = useStyles()
    const [count, setCount] = useState(1)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <Container className={classes.container}>
            <FlipDisplay value={count} digits={5}/>
        </Container>
    )
}
