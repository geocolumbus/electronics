import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import InstrumentPanel from '../components/InstrumentPanel'

const useStyles = makeStyles(theme => ({
    container: {
        maxWidth: 1080
    }
}))

export default function Home() {

    const classes = useStyles()

    return (
        <Container className={classes.container}>
            <InstrumentPanel/>
        </Container>
    )
}
