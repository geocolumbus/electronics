import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import Led from '../atoms/Led'

const useStyles = makeStyles(theme => ({
    ledHolder: {
        display: 'flex',
        flexFlow: 'row wrap',
        backgroundColor: '#333',
        padding: '6px 6px'
    }
}))

function dec2bin(dec) {
    return (dec >>> 0).toString(2)
}

export default function LedRow({ color, children }) {
    const classes = useStyles()
    let bin = dec2bin(children.toString(10))
    while (bin.length < 8) {
        bin = '0' + bin
    }
    return <Box style={{ width: 8 * 24 + 12 }}>
        <Box className={classes.ledHolder}>
            {bin.split('').map((digit, index) => {
                return <Led color={color} key={index} on={digit === '1'}/>
            })}
        </Box>
    </Box>
}
