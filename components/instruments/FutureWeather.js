import SegDisplay from '../segdisplay/SegDisplay'
import useSWR from 'swr'

export default function FutureWeather({ color = 'orange' }) {

    const updateFutureWeather = () => {
        let futureWeather = ''
        const { data, error } = useSWR('/api/weather', { refreshInterval: 1000 * 60 * 20 })
        if (data && data.futureWeather && data.futureWeatherTime) {
            futureWeather = `${data.futureWeatherTime.trim()}: ${data.futureWeather.trim()}`
        }
        if (error) {
            console.log(error)
        }
        return futureWeather
    }
    let futureWeather = updateFutureWeather()
    futureWeather = futureWeather.padEnd((42 + futureWeather.length) / 2)

    return <SegDisplay alpha color={color} fontSize={0.89} digits={40}>{futureWeather}</SegDisplay>
}
