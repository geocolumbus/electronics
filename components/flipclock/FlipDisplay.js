import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import FlipNumber from './FlipNumber'

const useStyles = makeStyles(theme => ({
    display: {
        display: 'flex',
        flexFlow: 'row wrap',
        padding: '5px 0',
        backgroundColor: '#333'
    }
}))

export default function FlipDisplay({ digits, value }) {

    const classes = useStyles()

    return <Box className={classes.display}>
        {[...Array(digits).keys()].map(i => {
            const charVal = value.toString().padStart(digits, '0').charAt(i)
            return <FlipNumber key={i} value={charVal}/>
        })}
    </Box>
}
