const API_KEY = window.API_KEY;
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp} °C`;
    });
}

function onGeoError() {
    alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

