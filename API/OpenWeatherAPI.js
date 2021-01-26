const API_TOKEN = "YOUR_API_TOKEN"

export function getWeatherFromCityName(city){
    const url = "http://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid=" + API_TOKEN

    return fetch(url)
        .then(res => res.json())
        .catch(error => console.error(error))
}

export function getWeatherIcon(iconCode){
    return "http://openweathermap.org/img/wn/" + iconCode + "@2x.png"
}
