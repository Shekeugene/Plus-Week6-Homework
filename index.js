function searchWeather(respone) {
    let cityTemperature = Math.round(respone.data.main.temp);
    let cityTemperatureElemenet = document.querySelector("#today-weather");
    cityTemperatureElemenet.innerHTML = `${cityTemperature}`;
    let cityHumidity = respone.data.main.humidity;
    let cityHumidityElement = document.querySelector(".humidity");
    cityHumidityElement.innerHTML = `${cityHumidity}`;
    let cityWindSpeed = Math.round(respone.data.wind.speed);
    let cityWindSpeedElement = document.querySelector(".wind-speed");
    cityWindSpeedElement.innerHTML = `${cityWindSpeed}`;
  }
  
  function searchCity(event) {
    event.preventDefault();
    let cityInput = document.querySelector("#city-input");
    let cityName = document.querySelector(".city-name");
    cityName.innerHTML = `${cityInput.value}`;
    let apiKey = "d6f30d80a523e717fc077ff19806dd79";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=d6f30d80a523e717fc077ff19806dd79&units=metric`;
    axios.get(apiUrl).then(searchWeather);
  }
  
  let form = document.querySelector("#city-form");
  form.addEventListener("submit", searchCity);
  
  let time = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Satursday"
  ];
  days = days[time.getDay()];
  let hour = time.getHours();
  let minutes = time.getMinutes();
  
  let currentTime = document.querySelector(".current-time");
  currentTime.innerHTML = `${days} ${hour}:${minutes}`;
  
  //----------------------------------------
  function getWeather(respone) {
    let temperature = Math.round(respone.data.main.temp);
    let temperatureElement = document.querySelector("#today-weather");
    temperatureElement.innerHTML = `${temperature}`;
    let currentCity = respone.data.name;
    let cityElement = document.querySelector("#city-name");
    cityElement.innerHTML = `${currentCity}`;
    let humidity = respone.data.main.humidity;
    let humidityElement = document.querySelector(".humidity");
    humidityElement.innerHTML = `${humidity}`;
    let windSpeed = Math.round(respone.data.wind.speed);
    let windSpeedElement = document.querySelector(".wind-speed");
    windSpeedElement.innerHTML = `${windSpeed}`;
  }
  
  function currentLocation(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiKey = "d6f30d80a523e717fc077ff19806dd79";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=d6f30d80a523e717fc077ff19806dd79&units=metric`;
    axios.get(apiUrl).then(getWeather);
  }
  
  function currentPosition() {
    navigator.geolocation.getCurrentPosition(currentLocation);
  }
  
  let button = document.querySelector("#currentButton");
  button.addEventListener("click", currentPosition);
  