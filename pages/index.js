import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import Bezel from '../components/atoms/Bezel'
import SegDisplay from '../components/segdisplay/SegDisplay'

const useStyles = makeStyles(theme => ({
    container: {
        maxWidth: 1080
    }
}))

export default function Home() {

    const classes = useStyles()

    return (
        <Container className={classes.container}>
            <Bezel>
                <SegDisplay color='green'>9485868</SegDisplay>
            </Bezel>
        </Container>
    )
}
