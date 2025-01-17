function loadWeatherData() {
    fetch("./config.json")
      .then((response) => response.json())
      .then((config) => {
        const { city, apiKey } = config;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fr&appid=${apiKey}`;
        return fetch(apiUrl);
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.cod !== 200) {
          throw new Error("Ville non trouvée ou erreur dans la requête.");
        }
        document.getElementById("city-name-text").textContent = data.name;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        document.getElementById("weather-icon").src = iconUrl;
        document.getElementById("weather-description").textContent = data.weather[0].description;
        document.getElementById("temperature").textContent = data.main.temp.toFixed(1);
        document.getElementById("feels-like").textContent = data.main.feels_like.toFixed(1);
        document.getElementById("humidity").textContent = data.main.humidity;


      })
      .catch((error) => {
        console.error("Erreur :", error);
        document.body.innerHTML = "<p>Impossible de récupérer les données météo. Vérifiez la configuration ou la clé API.</p>";
      });
  }

  loadWeatherData();

  setInterval(loadWeatherData, 3600000);