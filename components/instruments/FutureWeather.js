import SegDisplay from '../segdisplay/SegDisplay'
import useSWR from 'swr'

export default function FutureWeather({ color = 'orange' }) {

    const updateFutureWeather = () => {
        let futureWeather = ''
        const { data, error } = useSWR('/api/weather', { refreshInterval: 1000 * 60 * 20 })
        if (data && data.futureWeather && data.futureWeatherTime) {
            futureWeather = data.futureWeather.trim()
        }
        if (error) {
            console.log(error)
        }
        return futureWeather.slice(0, 40)
    }
    let futureWeather = updateFutureWeather()
    futureWeather = futureWeather.padEnd((42 + futureWeather.length) / 2)

    return <SegDisplay alpha color={color} fontSize={0.85} digits={40}>{futureWeather}</SegDisplay>
}
