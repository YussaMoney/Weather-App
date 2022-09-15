let weather = {
   api_Key: '0e159deded45d38a209baaca4a31d30c',
   fetchWeather: async function (city) {
    const url = `http://api.weatherstack.com/current?access_key=${this.api_Key}&query=${city}`;
    await fetch(url)
    .then((response) => response.json())
    .then((response) => console.log(response))
   }
}
console.log(weather.fetchWeather('city'));