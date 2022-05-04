let now = new Date();
let changeDateHour = document.querySelector("#date-hour");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let months = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];
let month = months[now.getMonth()];
let date = now.getDate();
let year = now.getFullYear();
let hour = now.getHours();
if (hour < 10) {
  hour = "0" + hour;
}

let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = "0" + minutes;
}
let sentenceDayHour = `${day} ${date}.${month} ${hour}:${minutes}`;
changeDateHour.innerHTML = sentenceDayHour;

//Change City Name
function changeCity(event) {
  event.preventDefault();
  let changeCityname = document.querySelector("#city-name");
  let changedCityName = document.querySelector("#city");
  changedCityName.innerHTML = changeCityname.value;
  let city = changeCityname.value;

  function showWeather(response) {
    console.log(response);
    let temperatureOfCity = Math.round(response.data.main.temp);
    let city = response.data.name;
    let changeCity = document.querySelector("#city");
    changeCity.innerHTML = city;
    let temperaureDisplay = document.querySelector("#degree-display");
    temperaureDisplay.innerHTML = temperatureOfCity + "°C";
    let weatherDay = response.data.weather[0].main;
    let windSpeed = Math.round(response.data.wind.speed);
    let infoWeather = document.querySelector("#weather-day");
    let infoWindSpeed = document.querySelector("#wind-speed");
    infoWeather.innerHTML = weatherDay;
    infoWindSpeed.innerHTML = "Wind speed: " + windSpeed + " km/h";
  }

  let apiUrlCity =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=99504b2dad7b6efc86f191546c548e5a&units=metric";
  axios.get(apiUrlCity).then(showWeather);
}

let selectCity = document.querySelector("#Enter-city");
selectCity.addEventListener("submit", changeCity);

function getCurrentLocation() {
  function handlePosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiUrlLonLat =
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
      latitude +
      "&lon=" +
      longitude +
      "&appid=99504b2dad7b6efc86f191546c548e5a&units=metric";

    function showCurrentWeather(response) {
      let temperatureOfCity = Math.round(response.data.main.temp);
      let city = response.data.name;
      let changeCity = document.querySelector("#city");
      changeCity.innerHTML = city;
      let temperaureDisplay = document.querySelector("#degree-display");
      temperaureDisplay.innerHTML = temperatureOfCity + "°C";
      let weatherDay = response.data.weather[0].main;
      let windSpeed = Math.round(response.data.wind.speed);
      let infoWeather = document.querySelector("#weather-day");
      let infoWindSpeed = document.querySelector("#wind-speed");
      infoWeather.innerHTML = weatherDay;
      infoWindSpeed.innerHTML = "Wind speed: " + windSpeed + " km/h";
    }

    axios.get(apiUrlLonLat).then(showCurrentWeather);
  }
  navigator.geolocation.getCurrentPosition(handlePosition);
}

let currentLocation = document.querySelector("#current-location");
currentLocation.addEventListener("click", getCurrentLocation);

//Change °C to °F
//function changeDegreestoCelcius(event) {
//event.preventDefault();
//let displayDegree = document.querySelector("#degree-display");
//displayDegree.innerHTML = "10°C / 20°C";
//}

//let celciusDegree = document.querySelector("#celcius-button");
//celciusDegree.addEventListener("click", changeDegreestoCelcius);

//function changeDegreestoFarenheit() {
// let displayDegree = document.querySelector("#degree-display");
//displayDegree.innerHTML = "50°F / 68°F";
//}

//let farenheitDegree = document.querySelector("#farenheit-button");
//farenheitDegree.addEventListener("click", changeDegreestoFarenheit);
