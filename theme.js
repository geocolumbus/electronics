import { createMuiTheme } from '@material-ui/core/styles'

// Create a theme instance.
const theme = createMuiTheme({
    custom: {
        dial: {
            color: '#333' // darkslategrey
        },
        bezel: {
            color: '#445' // #334
        }
    }
})

export default theme
