const API_KEY = "32571650e83dfbf687c249b7d46e1ba7";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector(".weather__column__city");
      const icon = document.querySelector("#wicon");
      const weather = document.querySelector(".weather__column__weather");
      const temp = document.querySelector(".weather__column__temp");
      const humid = document.querySelector(".weather__column__humid");
      const wind = document.querySelector(".weather__column__wind");
      city.innerHTML = `<i class="fa-solid fa-location-dot"></i>${data.name}`;
      icon.src = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0].icon}.svg`;
      weather.innerHTML = `${data.weather[0].main}`;
      temp.innerHTML = `<i class="fa-solid fa-temperature-half"></i> ${data.main.temp}℃`;
      humid.innerHTML = `<i class="fa-solid fa-droplet"></i> ${data.main.humidity}%`;
      wind.innerHTML = `<i class="fa-solid fa-wind"></i> ${data.wind.speed} m/s`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you...");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
