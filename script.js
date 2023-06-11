const apiKey = "49e123afb349b64bce38e2e970f16ea5";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

        async function checkWeather(){
            var location = document.getElementById("locationInput").value;
            const response = await fetch(apiUrl + `&appid=${apiKey}` + `&q=${location}`);
            var data = await response.json();

            document.getElementById("location").textContent = data.name + ", " + data.sys.country;
            document.getElementById("temp").textContent = data.main.temp + "°C";
            document.getElementById("description").textContent = data.weather[0].description;
            document.getElementById("wind-speed").textContent = data.wind.speed + " m/s";
            document.getElementById("humidity-percantage").textContent = data.main.humidity + " %";

            const weatherIcon = document.getElementById("weatherIcon");
            const description = data.weather[0].description;
            
            const weatherIcons = {
                "clear sky": "media/icons/day.svg",
                "scattered clouds": "media/icons/cloudy.svg",
                "few clouds": "media/icons/cloudy-day-2.svg",
                "broken clouds": "media/icons/cloudy-day-3.svg",
                "shower rain": "media/icons/rainy-6.svg",
                "rain": "media/icons/rainy-1.svg",
                "thunderstorm": "media/icons/thunder.svg",
                "snow": "media/icons/snowy-1.svg",
                "mist": "media/icons/rainy-1.svg"
              };
              
              weatherIcon.src = weatherIcons[description];
              
        }

        document.getElementById("searchCityForm").addEventListener("submit", function(event) {
        event.preventDefault();
        checkWeather();
        });