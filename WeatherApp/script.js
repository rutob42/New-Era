document.getElementById('weather-form').addEventListener('submit', function(event){
    event.preventDefault();

    const city = document.getElementById('city-input').value;
    if(city){
        getWeather(city);
    }
    else{
        alert('Please enter a city name.');
    }
});

async function getWeather(city){
    const apiKey
}