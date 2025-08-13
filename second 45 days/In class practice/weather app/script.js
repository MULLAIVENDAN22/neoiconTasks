const images = {
  cloud: "cloud.png",
  sunny: "sunny.png",
};

// https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=ad656878b0a4223a68eea3efc99314b9       mine

document.querySelector("input").value = "chennai";

document.querySelector("button").addEventListener("click", () => {
  if (document.querySelector("input").value) {
    fetching(document.querySelector("input").value);
  }
});

async function fetching(city = "chennai") {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ad656878b0a4223a68eea3efc99314b9&unit=metric`
  );
  const data = await response.json();
  console.log(data);
  const weather = document.querySelector(".weather");
  weather
    .querySelector("img")
    .setAttribute("src", data.weather.main == "clouds" ? images.cloud : images.sunny);
  console.log(weather.querySelector("img"));

  weather.querySelector("h1").textContent =
    `${(Number(data.main.temp) - 273.15).toFixed(2)}  °c`;
  weather.querySelector("h2").textContent = `${city}`;
  weather.querySelectorAll("h5")[0].textContent = `${data.main.humidity} %`;
  weather.querySelectorAll("h5")[1].textContent = `${data.wind.speed} km/h`;
}
fetching();
