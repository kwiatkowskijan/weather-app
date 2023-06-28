const apiKey = "49e123afb349b64bce38e2e970f16ea5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

async function checkWeather() {
  const location = document.getElementById("locationInput").value;
  const response = await fetch(apiUrl + `&appid=${apiKey}` + `&q=${location}`);
  const data = await response.json();

  if (response.status == 404) {
    document.getElementById("blad").style.display = "block";
    document.getElementById("weather-result").style.display = "none";
  } else {
    document.getElementById("blad").style.display = "none";
    document.getElementById("weather-result").style.display = "flex";
    document.getElementById("temp").textContent = Math.round(data.main.temp) + "°C";
    document.getElementById("description").textContent = data.weather[0].description;
    document.getElementById("wind-speed").textContent = data.wind.speed + " m/s";
    document.getElementById("humidity-percantage").textContent = data.main.humidity + " %";

    const weatherIcon = document.getElementById("weatherIcon");
    const main = data.weather[0].main;

    const weatherIcons = {
      "Clear": "media/icons/clear-day.svg",
      "Clouds": "media/icons/cloudy.svg",
      "Rain": "media/icons/rain.svg",
      "Drizzle": "media/icons/partly-cloudy-day-rain.svg",
      "Thunderstorm": "media/icons/thunderstorms-extreme.svg",
      "Snow": "media/icons/snow.svg",
      "Atmosphere": "media/icons/fog.svg"
    };

    weatherIcon.src = weatherIcons[main];

    //#############################################################################

    const windIcon = document.getElementById("windIcon");
    const windSpeed = data.wind.speed;

    const windIcons = {
      "low": "media/icons/windsock-weak.svg",
      "medium": "media/icons/wind.svg",
      "high": "media/icons/wind-alert.svg"
    };

    let selectedWindIcon = windIcons.medium;

    if (windSpeed >= 14) {
      selectedWindIcon = windIcons.high;
    } else if (windSpeed <= 8) {
      selectedWindIcon = windIcons.low;
    }

    windIcon.src = selectedWindIcon;

    //#############################################################################

    const humidityIcon = document.getElementById("humidityIcon");
    const humidity = data.main.humidity;

    const humidityIcons = {
      "low": "media/icons/pollen.svg",
      "medium": "media/icons/raindrop.svg",
      "high": "media/icons/raindrops.svg"
    };

    let selectedHumidityIcon = humidityIcons.medium;

    if (humidity >= 60) {
      selectedHumidityIcon = humidityIcons.high;
    } else if (humidity <= 40) {
      selectedHumidityIcon = humidityIcons.low;
    }

    humidityIcon.src = selectedHumidityIcon;
  }
}

document.getElementById("searchCityForm").addEventListener("submit", function (event) {
  event.preventDefault();
  checkWeather();
});