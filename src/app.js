function displayTemper(response){
    console.log(response.data);
    let cityElem = document.querySelector("#city");
    let temperElem = document.querySelector("#temper");
    let descriptionElem =document.querySelector("#description");
    let humidElem = document.querySelector("#humid");
    let windElem =document.querySelector("#wind");
    temperElem.innerHTML =Math.round(response.data.main.temp);
    cityElem.innerHTML =response.data.name;
    descriptionElem.innerHTML =response.data.weather[0].description;
    humidElem.innerHTML =response.data.main.humidity;
    windElem.innerHTML =Math.round(response.data.wind.speed);
}

let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
let cityName ="Odessa";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemper);