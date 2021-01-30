import { makeStyles } from '@material-ui/core/styles'
import SegDisplay from '../components/segdisplay/SegDisplay'
import { Container } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    container: {
        maxWidth: 1080
    },
    header: {
        backgroundColor: '#ffc',
        padding: theme.spacing(2),
        height: 100
    },
    menu: {
        backgroundColor: '#cff',
        height: 'calc(100vh - 200px)'
    },
    body: {
        backgroundColor: '#fcf',
        height: 'calc(100vh - 200px)'
    },
    footer: {
        backgroundColor: '#ffc',
        padding: theme.spacing(2),
        height: 100
    }
}))

export default function Home() {

    const classes = useStyles()

    return (
        <Container className={classes.container}>
            <SegDisplay>4830747</SegDisplay>
        </Container>
    )
}
