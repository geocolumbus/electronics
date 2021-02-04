import { makeStyles } from '@material-ui/core/styles'
import Image from 'next/image'
import { Box } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    screw: {
        width: 20,
        height: 20,
        padding: '4px 0 0 4px'
    }
}))

export default function PanelScrew({ type }) {
    const classes = useStyles()
    return <Box className = {classes.screw}>
        <Image
            src={type === 'steel'
                ? '/images/screw.png'
                : '/images/brass-screw.png'}
            alt='panel screw'
            width={14}
            height={14}
        />
    </Box>
}
