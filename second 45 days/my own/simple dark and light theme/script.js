const btn = document.getElementById("btn");
const container = document.querySelector(".container");
let theme;

btn.addEventListener("click", () => {
  theme = localStorage.getItem("theme");
  container.classList.toggle("dark");
  theme = container.classList.contains("dark") ? "dark" : "light";
  window.localStorage.setItem("theme", theme);
});

window.addEventListener("DOMContentLoaded", () => {
  theme = window.localStorage.getItem("theme");
  if (theme === "dark") {
    container.classList.add("dark");
  }
});
