import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import Temperature from '../components/instruments/Temperature'

const useStyles = makeStyles(theme => ({
    root: {
        padding: 10
    }
}))

export default function Home() {

    const classes = useStyles()
    /*
    const [count, setCount] = useState(1)
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount > 254 ? 0 : prevCount + 1)
        }, 500)
        return () => clearInterval(interval)
    }, [])
*/
    return (
        <Box className={classes.root}>
            <Temperature value={-20}/>
        </Box>
    )
}
