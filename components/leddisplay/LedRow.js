import { makeStyles } from '@material-ui/core/styles'
import Led from '../atoms/Led'

const useStyles = makeStyles(theme => ({
    ledHolder: {
        display: 'flex',
        flexFlow: 'row wrap',
        backgroundColor: '#333',
        padding: '0 2px'
    }
}))

function dec2bin(dec) {
    const max = 2 ** 32 - 1
    if (dec > max) {
        return ((dec / max) >>> 0).toString(2) + ((dec % max) >>> 0).toString(2)
    } else {
        return (dec >>> 0).toString(2)
    }
}

export default function LedRow({ color, bits, children }) {
    const classes = useStyles()
    let bin = dec2bin(children)
    bits = bits || 8
    while (bin.length < bits) {
        bin = '0' + bin
    }
    return <div style={{ width: bits * 28 + 12 }}>
        <div className={classes.ledHolder}>
            {bin.split('').map((digit, index) => {
                return <Led color={color} key={index} on={digit === '1'}/>
            })}
        </div>
    </div>
}
