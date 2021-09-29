
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function (response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;

    })
    .catch(function (error) {
      // Affiche une erreur
      console.error(error);
    });
}

function updateWeather() {

  var city = document.getElementById("city-input").value;

  const apiWeather = new API_WEATHER(city);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function (response) {
      // Récupère la donnée d'une API
      const data = response.data;
      const main = [];
      const description = [];
      const temp = [];
      const icon = []
      // On récupère l'information principal
      for (let i = 0; i < 4; ++i) {
        main.push(data.list[i].weather[0].main);
        description.push(data.list[i].weather[0].description);
        temp.push(data.list[i].temp.day);
        icon.push(apiWeather.getHTMLElementFromIcon(data.list[i].weather[0].icon));
      }
      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main[0];
      document.getElementById('today-forecast-more-info').innerHTML = description[0];
      document.getElementById('icon-weather-container').innerHTML = icon[0];
      document.getElementById('today-forecast-temp').innerHTML = `${temp[0]}°C`;

      document.getElementById('today-forecast-main1').innerHTML = main[1];
      document.getElementById('today-forecast-more-info1').innerHTML = description[1];
      document.getElementById('icon-weather-container1').innerHTML = icon[1];
      document.getElementById('today-forecast-temp1').innerHTML = `${temp[1]}°C`;

      document.getElementById('today-forecast-main2').innerHTML = main[2];
      document.getElementById('today-forecast-more-info2').innerHTML = description[2];
      document.getElementById('icon-weather-container2').innerHTML = icon[2];
      document.getElementById('today-forecast-temp2').innerHTML = `${temp[2]}°C`;

      document.getElementById('today-forecast-main3').innerHTML = main[3];
      document.getElementById('today-forecast-more-info3').innerHTML = description[3];
      document.getElementById('icon-weather-container3').innerHTML = icon[3];
      document.getElementById('today-forecast-temp3').innerHTML = `${temp[3]}°C`;
    })
    .catch(function (error) {
      // Affiche une erreur
      console.error(error);
    });
}

function getThreeDaysForecast() {
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function (response) {
      // Récupère la donnée d'une API
      const data = response.data;
      const main = [];
      const description = [];
      const temp = [];
      const icon = []
      // On récupère l'information principal
      for (let i = 0; i < 4; ++i) {
        main.push(data.list[i].weather[0].main);
        description.push(data.list[i].weather[0].description);
        temp.push(data.list[i].temp.day);
        icon.push(apiWeather.getHTMLElementFromIcon(data.list[i].weather[0].icon));
      }
      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main[0];
      document.getElementById('today-forecast-more-info').innerHTML = description[0];
      document.getElementById('icon-weather-container').innerHTML = icon[0];
      document.getElementById('today-forecast-temp').innerHTML = `${temp[0]}°C`;

      document.getElementById('today-forecast-main1').innerHTML = main[1];
      document.getElementById('today-forecast-more-info1').innerHTML = description[1];
      document.getElementById('icon-weather-container1').innerHTML = icon[1];
      document.getElementById('today-forecast-temp1').innerHTML = `${temp[1]}°C`;

      document.getElementById('today-forecast-main2').innerHTML = main[2];
      document.getElementById('today-forecast-more-info2').innerHTML = description[2];
      document.getElementById('icon-weather-container2').innerHTML = icon[2];
      document.getElementById('today-forecast-temp2').innerHTML = `${temp[2]}°C`;

      document.getElementById('today-forecast-main3').innerHTML = main[3];
      document.getElementById('today-forecast-more-info3').innerHTML = description[3];
      document.getElementById('icon-weather-container3').innerHTML = icon[3];
      document.getElementById('today-forecast-temp3').innerHTML = `${temp[3]}°C`;
    })
    .catch(function (error) {
      // Affiche une erreur
      console.error(error);
    });
};