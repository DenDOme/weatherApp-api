const keyApi = '0967ca9954364804849164510240502';
const base = 'http://api.weatherapi.com/v1';

async function getDataFromApi(link, request) {
  const response = await fetch(`${base}/${link}?key=${keyApi}&q=${request}`);
  const data = await response.json();
  if (!data.error) {
    return getOnlyData(data);
  }
}

function getOnlyData(element) {
  const data = {
    weather: {
      cloud: element.current.cloud,
      feelslike: element.current.feelslike_c,
      gust: element.current.gust_kph,
      is_day: element.current.is_day,
      temp_c: element.current.temp_c,
      wind_degree: element.current.wind_degree,
      wind_dir: element.current.wind_dir,
      wind_kph: element.current.wind_kph,
    },
    location: {
      country: element.location.country,
      localtime: element.location.localtime,
      name: element.location.name,
    },
  };
  return data;
}

export default getDataFromApi;
