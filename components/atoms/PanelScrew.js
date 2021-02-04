import { makeStyles } from '@material-ui/core/styles'
import Image from 'next/image'

const useStyles = makeStyles(theme => ({
    screw: {
        width: 20,
        height: 20
    }
}))

export default function PanelScrew({ type }) {
    const classes = useStyles()
    return <Image
        className = {classes.screw}
        src={type === 'steel'
            ? '/images/screw.png'
            : '/images/brass-screw.png'}
        alt='panel screw'
        width={20}
        height={20}
    />
}
