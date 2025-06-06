const h1 = document.querySelector("h1");

setInterval(() => {
  const date = new Date();
  const hours = date.getHours();
  h1.innerHTML = `${(hours % 12 || 12).toString().padStart(2, "0")} : ${date.getMinutes().toString().padStart(2, "0")} : ${date.getSeconds().toString().padStart(2, "0")}  ${date.getHours() > 11 ? "PM" : "AM"}`;
  console.log(date.getHours(), date.getMinutes());
}, 1000);
