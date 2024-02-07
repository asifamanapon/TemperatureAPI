// Do not show API key on your JS file like this
const API_KEY = '9b6d70d636acfa62e7fdddf965ac50d4';

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error('Failed to fetch weather data');
            }
            return res.json();
        })
        .then(data => displayWeather(data))
        .catch(error => {
            console.error('Error fetching weather data:', error);
            // You can add code here to display an error message to the user
        });
};

const displayWeather = data => {
    setInnerTextById('temperature', data.main.temp);
    setInnerTextById('condition', data.weather[0].main);
};

const setInnerTextById = (id, text) => {
    const element = document.getElementById(id);
    if (element) {
        element.innerText = text;
    } else {
        console.error(`Element with ID '${id}' not found.`);
    }
};

document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const city = searchField.value;

    // Set city name
    setInnerTextById('city', city);

    // Load temperature for the city
    loadTemperature(city);
});

// Load initial temperature for Dhaka
loadTemperature('Dhaka');
