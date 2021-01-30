import { Box, Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

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
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Box className={classes.header}>Header</Box>
                </Grid>
                <Grid item xs={2}><Box className={classes.menu}>Menu</Box></Grid>
                <Grid item xs={10}><Box className={classes.body}>Body</Box></Grid>
                <Grid item xs={12}>
                    <Box className={classes.footer}>Footer</Box>
                </Grid>
            </Grid>
        </Container>
    )
}
