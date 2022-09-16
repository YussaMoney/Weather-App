/* eslint-disable camelcase */
const searchInput = document.querySelector('#search-box');
const searchBtn = document.querySelector('#search-btn');
const heading = document.querySelector('.heading');
const description = document.querySelector('.descript');
const descriptionImg = document.querySelector('img');
const temp = document.querySelector('.temp');
const time = document.querySelector('.time');
const precipitate = document.querySelector('.precipitate');
const domPressure = document.querySelector('.humidity');
const domHumidity = document.querySelector('.pressure');
const windSpeed = document.querySelector('.wind-speed');
const windDirection = document.querySelector('.wind-dir');
let searchElement = searchInput.value;

const weather = {
  api_Key: '0e159deded45d38a209baaca4a31d30c',
  fetchWeather(city) {
    const url = `http://api.weatherstack.com/current?access_key=${this.api_Key}&query=${city}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },

  displayWeather(data) {
    const { query } = data.request;
    const { localtime } = data.location;
    const { temperature } = data.current;
    const { weather_icons } = data.current;
    const { weather_descriptions } = data.current;
    const { precip } = data.current;
    const { humidity } = data.current;
    const { pressure } = data.current;
    const { wind_dir } = data.current;
    const { wind_speed } = data.current;
    heading.textContent = `Weather in ${query}`;
    console.log(query,
      localtime,
      temperature,
      weather_icons,
      weather_descriptions,
      precip,
      humidity,
      pressure,
      wind_dir,
      wind_speed);

    description.innerHTML = weather_descriptions;
    descriptionImg.src = weather_icons;
    temp.innerHTML = `${temperature}<span class="color">°C</span>`;
    time.innerHTML = `${localtime}`;
    precipitate.innerHTML = `Precipitate: <span class='accent-color'>${precip}</span>mm`;
    domHumidity.innerHTML = `Humidity: <span class='accent-color'>${humidity}</span>%`;
    domPressure.innerHTML = `Pressure: <span class='accent-color'>${pressure}</span>mb`;
    windDirection.innerHTML = `Wind Direction: <span class="text">${wind_dir}</span>`;
    windSpeed.innerHTML = `Wind Speed: <span class='accent-color'>${wind_speed}</span>km/hr`;
    searchElement = '';
  },
};
weather.fetchWeather('Nigeria');
// searchBtn.addEventListener('click', weather.fetchWeather);
// weather.fetchWeather('miami');
