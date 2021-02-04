import { createMuiTheme } from '@material-ui/core/styles'

// Create a theme instance.
const theme = createMuiTheme({
    custom: {
        dial: {
            color: 'darkslategrey' // darkslategrey
        },
        bezel: {
            color: '#334' // #334
        }
    }
})

export default theme
