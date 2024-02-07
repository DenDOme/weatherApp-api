import arrowImg from '../assets/arrow.svg';

const loadPage = (data) => {
  const day = document.getElementById('is_day');
  day.style.backgroundColor = data.weather.is_day ? 'yellow' : 'white';

  const temp = document.getElementById('temp');
  temp.textContent = data.weather.temp_c;

  const country = document.getElementById('country');
  country.textContent = data.location.country;

  const place = document.getElementById('place');
  place.textContent = data.location.name;

  const time = document.getElementById('time');
  time.textContent = data.location.localtime;

  const cloud = document.getElementById('cloud');
  cloud.textContent = data.weather.cloud;

  const feelslike = document.getElementById('feelslike');
  feelslike.textContent = data.weather.feelslike;

  const gust = document.getElementById('gust');
  gust.textContent = data.weather.gust;

  const arrow = document.getElementById('wind__arrow');
  arrow.src = arrowImg;
  arrow.style.transform = `rotate(${data.weather.wind_degree}deg)`;
  console.log(data.weather.wind_degree);

  const windDir = document.getElementById('wind__direction');
  windDir.textContent = data.weather.wind_dir;

  const windSpeed = document.getElementById('wind__kph');
  windSpeed.textContent = data.weather.wind_kph;
};

export default loadPage;
