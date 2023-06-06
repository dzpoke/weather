const cityForm = document.querySelector('[data-js="change-location"]')
// const cityNameContainer = document.querySelector('[data-js="city-name"]')
// const cityWeatherContainer = document.querySelector('[data-js="city-weather"]')
// const cityTemperatureContainer = document.querySelector('[data-js="city-temperature"]') 
// const cityCard = document.querySelector('[data-js="city-card"]')
// let timeImg = document.querySelector('[data-js="time"]')
// const timeIconContainer = document.querySelector('[data-js="time-icon"]')


cityForm.addEventListener('submit', async event => {
    event.preventDefault()

    const inputCity = event.target.city.value
    const [{ Key }] = await getCityData(inputCity)
    // const teste2  = await getCityTemperature(Key)

    console.log(Key)

    cityForm.reset()
})