import { makeStyles } from '@material-ui/core/styles'
import LedRow from '../components/leddisplay/LedRow'
import { useEffect, useState } from 'react'

const useStyles = makeStyles(theme => ({
    container: {
        maxWidth: 1080,
        display: 'flex',
        flexFlow: 'row wrap'
    }
}))

export default function Home() {

    const classes = useStyles()

    const [count, setCount] = useState(1)
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount > 254 ? 0 : prevCount + 1)
        }, 100)
        return () => clearInterval(interval)
    }, [])

    return (
        <LedRow color='blue'>{count}</LedRow>
    )
}
