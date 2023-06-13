const apiKey = "49e123afb349b64bce38e2e970f16ea5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

async function checkWeather() {
  var location = document.getElementById("locationInput").value;
  const response = await fetch(apiUrl + `&appid=${apiKey}` + `&q=${location}`);
  var data = await response.json();

  document.getElementById("weather-result").style.display = "flex";
  
  // document.getElementById("location").textContent = data.name + ", " + data.sys.country;
  document.getElementById("temp").textContent = data.main.temp + "°C";
  document.getElementById("description").textContent = data.weather[0].description;
  document.getElementById("wind-speed").textContent = data.wind.speed + " m/s";
  document.getElementById("humidity-percantage").textContent = data.main.humidity + " %";

  const weatherIcon = document.getElementById("weatherIcon");
  const description = data.weather[0].description;

  const weatherIcons = {
    "clear sky": "media/icons/clear-day.svg",
    "scattered clouds": "media/icons/cloudy.svg",
    "few clouds": "media/icons/overcast.svg",
    "broken clouds": "media/icons/partly-cloudy-day.svg",
    "shower rain": "media/icons/rain.svg",
    "rain": "media/icons/partly-cloudy-day-rain.svg",
    "thunderstorm": "media/icons/thunderstorms-extreme.svg",
    "snow": "media/icons/snow.svg",
    "mist": "media/icons/fog.svg"
  };

  weatherIcon.src = weatherIcons[description];

  const windSpeed = data.wind.speed;

  if (windSpeed >= 0 && windSpeed <= 5) {

  } else if (windSpeed >= 5.01 && windSpeed <= 10) {

  }

}

document.getElementById("searchCityForm").addEventListener("submit", function (event) {
  event.preventDefault();
  checkWeather();
});