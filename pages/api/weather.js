import fetch from 'node-fetch'

export default async(req, res) => {

    const url = 'https://forecast.weather.gov/MapClick.php?lat=40.1008&lon=-83.0271&unit=0&lg=english&FcstType=json'

    const filter = (json) => {
        /*
            'currentobservation': {
                'id': 'KOSU',
                'name': 'Columbus, Ohio State University Airport',
                'elev': '902',
                'latitude': '40.08',
                'longitude': '-83.08',
                'Date': '14 Feb 05:53 am EST',
                'Temp': '21',
                'Dewp': '18',
                'Relh': '88',
                'Winds': '7',
                'Windd': '330',
                'Gust': '0',
                'Weather': ' Fog/Mist',
                'Weatherimage': 'nfg.png',
                'Visibility': '4.00',
                'Altimeter': '1026.6',
                'SLP': '30.28',
                'timezone': 'EST',
                'state': 'OH',
                'WindChill': '12'
            }
         */
        return { temperature: json.currentobservation.Temp }
    }

    try {
        console.log(`${new Date()} calling /api/weather`)
        const response = await fetch(url)
        const json = await response.json()

        if (response.status !== 200) {
            res.statusCode = response.status
            res.json({ message: response.statusMessage })
        } else {
            res.setHeader('Cache-Control', 'max-age=1200')
            res.statusCode = 200
            res.json(filter(json))
        }
    } catch (error) {
        res.statusCode = 500
        res.json(error)
    }
}
