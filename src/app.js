function formatDate(timestamp){
    let dateNow = new Date(timestamp);
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
    let hours = dateNow.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
      }
    let minutes = dateNow.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
      }
    let day = days[dateNow.getDay()];
    return `${day} ${hours}:${minutes}`;
}

function displayTemper(response){
    console.log(response.data);
    let cityElem = document.querySelector("#city");
    let temperElem = document.querySelector("#temper");
    let descriptionElem =document.querySelector("#description");
    let humidElem = document.querySelector("#humid");
    let windElem =document.querySelector("#wind");
    let nowtimeElem = document.querySelector("#nowtime");
    temperElem.innerHTML =Math.round(response.data.main.temp);
    cityElem.innerHTML =response.data.name;
    descriptionElem.innerHTML =response.data.weather[0].description;
    humidElem.innerHTML =response.data.main.humidity;
    windElem.innerHTML =Math.round(response.data.wind.speed);
    nowtimeElem.innerHTML = formatDate(response.data.dt * 1000);
}

let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
let cityName ="Odessa";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemper);