
const search = document.querySelector(".search input");
const searchBtn = document.querySelector(".search-img");
let weatherImg = document.querySelector(".weather-icon");
let place = document.querySelector(".city");
let temp = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");


async function getData(city) {
    const apiUrl = `e7c58f5b2f71f49cd9d98c4d594bded8`;
    const apikey = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=`;

    const res = await fetch(apikey + city + `&appid=${apiUrl}`);

    if (res.status == 404) {
        document.querySelector(".error").style.display = "block";
        temp.innerHTML = " ";
        humidity.innerHTML = " ";
        wind.innerHTML = " ";
        place.innerHTML = " ";

    } else {

        let result = await res.json();
        temp.innerHTML = Math.round(result.main.temp) + "°c";
        humidity.innerHTML = Math.round(result.main.humidity) + "%";
        wind.innerHTML = Math.round(result.wind.speed) + " km/h";
        place.innerHTML = result.name;

        if (result.weather[0].main == "Clouds" || "Haze") {
            weatherImg.src = "./img/clouds.png";
        } else if (result.weather[0].main == "Rain") {
            weatherImg.src = "./img/rain.png";
        } else if (result.weather[0].main == "Clear") {
            weatherImg.src = "./img/clear.png";
        } else if (result.weather[0].main == "Snow") {
            weatherImg.src = "./img/snow.png";
        } else if (result.weather[0].main == "Mist") {
            weatherImg.src = "./img/mist.png";
        } else if (result.weather[0].main == "Drizzle") {
            weatherImg.src = "./img/drizzle.png";
        }

        document.querySelector(".error").style.display = "none";
    }

}

searchBtn.addEventListener("click", () => {
    getData(search.value);
});

