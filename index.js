/* eslint-disable camelcase */
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
    description.textContent = weather_descriptions;
    descriptionImg.src = weather_icons;
    temp.textContent = `${temperature}°C`;
    time.textContent = `Local Time: ${localtime}`;
    time.style.color = '#89D3FF';
    precipitate.textContent = `Precipitate: ${precip}mm`;
    domHumidity.textContent = `Humidity: ${humidity}%`;
    domPressure.textContent = `Pressure: ${pressure}mb`;
    windDirection.textContent = `Wind Direction: ${wind_dir}`;
    windSpeed.textContent = `Wind Speed: ${wind_speed}km/hr`;
  },
};
weather.fetchWeather('egypt');