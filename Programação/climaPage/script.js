const apiKey = 'd376632ca870907d9097c706d25b60ae'; // Substitua pela sua chave da API OpenWeatherMap
const searchBtn = document.getElementById('searchBtn');
const weatherResult = document.getElementById('weatherResult');

searchBtn.addEventListener('click', () => {
    const location = document.getElementById('location').value;
    if (location) {
        fetchWeather(location);
    }
});

async function fetchWeather(location) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    if (data.cod === 200) {
        displayWeather(data);
    } else {
        weatherResult.innerHTML = `<p>Localização não encontrada.</p>`;
    }
}

function displayWeather(data) {
    const { main, weather, name } = data;
    const weatherHTML = `
        <h2>Previsão para ${name}</h2>
        <p>Temperatura: ${main.temp}°C</p>
        <p>Clima: ${weather[0].description}</p>
        <p>Umidade: ${main.humidity}%</p>
    `;
    weatherResult.innerHTML = weatherHTML;
}