
const APIKey = 'MDfC0ARkAjwcahfXBGvyeV35vkYC7hyg'
const baseUrl = `http://dataservice.accuweather.com/`


const getCityUrl = cityName =>
     `${baseUrl}/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getCityData = async cityName => {
    try {
        const getCity = getCityUrl(cityName)
        const response = await fetch(getCity)

        if(!response.ok){
            throw new Error('Nao foi possivel obter os dados')
        }

        const [cityDate] = await response.json()
        return cityDate

    } catch ({name, message}) {
        alert(`${name}: ${message}`)
    }
}


const getCityTemperature = async cityName => {
    try {
        const { Key } = await getCityData(cityName)
        const getTemperature = `${baseUrl}/currentconditions/v1/${Key}?apikey=${APIKey}`
        const response = await fetch(getTemperature)

        if(!response.ok){
            throw new Error('Nao foi possivel obter os dados')
        }

        const [cityTemperature] = await response.json()
        return cityTemperature

    } catch ({name, message}) {
        alert(`${name}: ${message}`)
    }
}

getCityData('Rio de Janeiro')
getCityTemperature('Rio de Janeiro')