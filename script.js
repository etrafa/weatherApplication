"using strict";

const apiKey = "cc7637b7c61348b54e9c8c43b6d9c860";
const temperatureLabel = document.querySelector(".temperature-label");
const cityLabel = document.querySelector(".city-label");
const dayLabel = document.querySelector(".day-label");
const timeLabel = document.querySelector(".time-label");
const countryFlag = document.querySelector(".country-flag");
const firstDayLabel = document.querySelector(".first-day-label");
const secondDayLabel = document.querySelector(".second-day-label");
const thirdDayLabel = document.querySelector(".third-day-label");
const fourthDayLabel = document.querySelector(".fourth-day-label");
const fifthDayLabel = document.querySelector(".fifth-day-label");
const sixthDayLabel = document.querySelector(".sixth-day-label");
const seventhDayLabel = document.querySelector(".seventh-day-label");
const windLabel = document.querySelector(".wind--label");
const humidityLabel = document.querySelector(".humidity--label");
const visibilityLabel = document.querySelector(".visibility--label");
const feelsLikeLabel = document.querySelector(".feels--like--label");
const sunriseLabel = document.querySelector(".sunrise--label");
const sunsetLabel = document.querySelector(".sunset--label");
const maxTemperatureLabel = document.querySelector(".max-temperature-label");
const minTemperatureLabel = document.querySelector(".min-temperature-label");
const weatherStatusLabel = document.querySelector(".weather-status-label");
const mainDayLabel = document.querySelector(".day-label");
const inputLabel = document.getElementById("search");
const submitButton = document.querySelector(".submit-button");
const imageLabel = document.querySelector(".picture--label");
const firstDayPicture = document.querySelector(".first-day-of-week-picture");
const secondDayPicture = document.querySelector(".second-day-of-week-picture");
const thirdDayPicture = document.querySelector(".third-day-of-week-picture");
const fourthDayPicture = document.querySelector(".fourth-day-of-week-picture");
const fifthDayPicture = document.querySelector(".fifth-day-of-week-picture");
const sixthDayPicture = document.querySelector(".sixth-day-of-week-picture");
const seventhDayPicture = document.querySelector(
  ".seventh-day-of-week-picture"
);

//MAX
const firstDayTemperatureMax = document.querySelector(
  ".first-day-temperature-max"
);
const secondDayTemperatureMax = document.querySelector(
  ".second-day-temperature-max"
);
const thirdDayTemperatureMax = document.querySelector(
  ".third-day-temperature-max"
);
const fourthDayTemperatureMax = document.querySelector(
  ".fourth-day-temperature-max"
);
const fifthDayTemperatureMax = document.querySelector(
  ".fifth-day-temperature-max"
);
const sixthDayTemperatureMax = document.querySelector(
  ".sixth-day-temperature-max"
);
const seventhDayTemperatureMax = document.querySelector(
  ".seventh-day-temperature-max"
);

//MIN//
const firstDayTemperatureMin = document.querySelector(
  ".first-day-temperature-min"
);
const secondDayTemperatureMin = document.querySelector(
  ".second-day-temperature-min"
);
const thirdDayTemperatureMin = document.querySelector(
  ".third-day-temperature-min"
);
const fourthDayTemperatureMin = document.querySelector(
  ".fourth-day-temperature-min"
);
const fifthDayTemperatureMin = document.querySelector(
  ".fifth-day-temperature-min"
);
const sixthDayTemperatureMin = document.querySelector(
  ".sixth-day-temperature-min"
);
const seventhDayTemperatureMin = document.querySelector(
  ".seventh-day-temperature-min"
);

const putNames = function (input) {
  cityLabel.textContent = input.city.name;
  temperatureLabel.textContent = `${Math.round(input.list[0].main.temp)}°C`;
  feelsLikeLabel.textContent = `${Math.round(input.list[0].main.feels_like)}°C`;
  visibilityLabel.textContent = `${Math.trunc(
    input.list[0].visibility / 1000
  )} km`;
  imageLabel.src = `https://openweathermap.org/img/wn/${input.list[0].weather[0].icon}@2x.png`;
  sunriseLabel.textContent = `${window
    .moment(input.city.sunrise * 1000)
    .format("HH:mm a")}`;
  sunsetLabel.textContent = `${window
    .moment(input.city.sunset * 1000)
    .format("HH:mm a")}`;
  maxTemperatureLabel.textContent = `${Math.round(
    input.list[0].main.temp_max
  )}°C`;
  minTemperatureLabel.textContent = `${Math.round(
    input.list[0].main.temp_min
  )}°C`;
  weatherStatusLabel.textContent = input.list[0].weather[0].description;
  mainDayLabel.textContent = dayName;

  firstDayPicture.src = `http://openweathermap.org/img/wn/${input.list[1].weather[0].icon}@2x.png`;
  secondDayPicture.src = `http://openweathermap.org/img/wn/${input.list[2].weather[0].icon}@2x.png`;
  thirdDayPicture.src = `http://openweathermap.org/img/wn/${input.list[3].weather[0].icon}@2x.png`;
  fourthDayPicture.src = `http://openweathermap.org/img/wn/${input.list[4].weather[0].icon}@2x.png`;
  fifthDayPicture.src = `http://openweathermap.org/img/wn/${input.list[5].weather[0].icon}@2x.png`;
  sixthDayPicture.src = `http://openweathermap.org/img/wn/${input.list[6].weather[0].icon}@2x.png`;
  seventhDayPicture.src = `http://openweathermap.org/img/wn/${input.list[7].weather[0].icon}@2x.png`;

  /*Refactoring Yapılacak/*/
  firstDayLabel.textContent = dayName = days[time.getDay() + 1].slice(0, 3);
  secondDayLabel.textContent = dayName = days[time.getDay() + 2].slice(0, 3);
  thirdDayLabel.textContent = dayName = days[time.getDay() + 3].slice(0, 3);
  fourthDayLabel.textContent = dayName = days[time.getDay() + -3].slice(0, 3);
  fifthDayLabel.textContent = dayName = days[time.getDay() + -2].slice(0, 3);
  sixthDayLabel.textContent = dayName = days[time.getDay() + -1].slice(0, 3);
  seventhDayLabel.textContent = dayName = days[time.getDay()].slice(0, 3);
  firstDayTemperatureMax.textContent = `${Math.round(
    input.list[8].main.temp_max
  )}°C`;
  firstDayTemperatureMin.textContent = `${Math.round(
    input.list[4].main.temp_min
  )}°C`;
  secondDayTemperatureMax.textContent = `${Math.round(
    input.list[16].main.temp_max
  )}°C`;
  secondDayTemperatureMin.textContent = `${Math.round(
    input.list[12].main.temp_min
  )}°C`;
  thirdDayTemperatureMax.textContent = `${Math.round(
    input.list[3].main.temp_max
  )}°C`;
  thirdDayTemperatureMin.textContent = `${Math.round(
    input.list[3].main.temp_min
  )}°C`;
  fourthDayTemperatureMax.textContent = `${Math.round(
    input.list[4].main.temp_max
  )}°C`;
  fourthDayTemperatureMin.textContent = `${Math.round(
    input.list[4].main.temp_min
  )}°C`;
  fifthDayTemperatureMax.textContent = `${Math.round(
    input.list[5].main.temp_max
  )}°C`;
  fifthDayTemperatureMin.textContent = `${Math.round(
    input.list[5].main.temp_min
  )}°C`;
  sixthDayTemperatureMax.textContent = `${Math.round(
    input.list[6].main.temp_max
  )}°C`;
  sixthDayTemperatureMin.textContent = `${Math.round(
    input.list[6].main.temp_min
  )}°C`;
  seventhDayTemperatureMax.textContent = `${Math.round(
    input.list[7].main.temp_max
  )}°C`;
  seventhDayTemperatureMin.textContent = `${Math.round(
    input.list[7].main.temp_min
  )}°C`;
};

const secondFetch = function (town) {
  windLabel.textContent = `${Math.round(town.wind.speed)} km/h`;
  humidityLabel.textContent = `${town.main.humidity}%`;
};

const getWeatherData = function (cityName) {
  fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => console.log(data) + putNames(data));

  return fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => console.log(data) + secondFetch(data));
};

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let time = new Date();
let dayName = days[time.getDay()];

submitButton.addEventListener("click", function () {
  getWeatherData(inputLabel.value);
});
