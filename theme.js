import { createMuiTheme } from '@material-ui/core/styles'

// Create a theme instance.
const theme1 = createMuiTheme({
    custom: {
        dial: {
            color: '#333'
        },
        bezel: {
            color: '#445'
        }
    }
})

const theme2 = createMuiTheme({
    custom: {
        dial: {
            color: '#334'
        },
        bezel: {
            color: '#222'
        },
        outline: {
            color: '#666'
        }
    }
})

export default theme2
