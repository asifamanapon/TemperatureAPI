// Do not show API key on your JS file like this
const API_KEY = `9b6d70d636acfa62e7fdddf965ac50d4`;

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data));
}

loadTemperature('dhaka'); 