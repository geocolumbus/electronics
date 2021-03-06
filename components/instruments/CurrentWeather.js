import SegDisplay from '../segdisplay/SegDisplay'
import useSWR from 'swr'

export default function CurrentWeather({ color = 'orange', size = 20 }) {

    const updateWeather = () => {
        let weather = ''
        const { data, error } = useSWR('/api/weather', { refreshInterval: 1000 * 60 * 20 })
        if (data && data.weather) {
            weather = data.weather.trim()
        }
        if (error) {
            console.log(error)
        }
        return weather
    }

    let weather = updateWeather()
    weather = weather.padEnd((size + weather.length) / 2)

    return <SegDisplay alpha color={color} digits={size}>{weather}</SegDisplay>
}
