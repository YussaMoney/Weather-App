/* eslint-disable camelcase */
const searchInput = document.querySelector('#search-box');
const searchBtn = document.querySelector('#search-btn');
const heading = document.querySelector('.heading');
const descript = document.querySelector('.descript');
const descriptionImg = document.querySelector('img');
const temperature = document.querySelector('.temp');
const domPressure = document.querySelector('.humidity');
const domHumidity = document.querySelector('.pressure');
const windSpeed = document.querySelector('.wind-speed');
const cardContainer = document.querySelector('.card-container');
const body = document.querySelector('body');

const weather = {
  apiKey: '530a24ab32b06a8382c670620ef76881',
  fetchWeather(city) {
    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`;
    fetch(api_url)
      .then((response) => response.json())
      .then((data) => this.displayWeather(data))
      .catch(() => {
        cardContainer.classList.remove('loading');
        Error(cardContainer.classList.add('loading-fail'));
      });
  },

  displayWeather(data) {
    const { name } = data;
    const { temp, pressure, humidity } = data.main;
    const { icon, description } = data.weather[0];
    const { speed } = data.wind;
    heading.innerHTML = `Weather in <span class="light-color">${name}</span>`;
    descript.innerHTML = description;
    descriptionImg.src = `https://openweathermap.org/img/wn/${icon}@4x.png`;
    temperature.innerHTML = `${temp}<span class="color">°C</span>`;
    domHumidity.innerHTML = `Humidity: <span class='accent-color'>${humidity}</span>%`;
    domPressure.innerHTML = `Pressure: <span class='accent-color'>${pressure}</span>hPa`;
    windSpeed.innerHTML = `Wind Speed: <span class='accent-color'>${speed}</span>m/s`;
    cardContainer.classList.remove('loading');
    body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${name}')`;
    body.style.width = '100vw';
    body.style.height = '100%';
  },

  search() {
    this.fetchWeather(searchInput.value);
  },
};

weather.fetchWeather('Nigeria');
searchBtn.addEventListener('click', () => {
  weather.search();
  searchInput.value = '';
});

searchInput.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    weather.search();
    searchInput.value = '';
  }
});
