document.getElementById('weather-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('city-input').value;
    if (city) {
        getWeather(city);
    } else {
        alert('Please enter a city name.');
    }
});

async function getWeather(city) {
    const apiKey = '826a90a34d9743e8b1780427240507'; // Replace with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.cod === 200) {
            displayWeather(data);
        } else {
            alert('City not found.');
        }
    } catch (error) {
        alert('An error occurred while fetching the weather data.');
    }
}

function displayWeather(data) {
    const cityName = data.name;
    const temperature = data.main.temp;
    const condition = data.weather[0].description;
    const icon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    document.getElementById('city-name').textContent = cityName;
    document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
    document.getElementById('condition').textContent = `Condition: ${condition}`;
    document.getElementById('weather-icon').src = icon;
    document.getElementById('weather-result').classList.remove('hidden');
}
