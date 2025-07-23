document.addEventListener("DOMContentLoaded", () => {
  let time = new Date();
  console.log(time.getHours(), time.getMinutes(), time.getSeconds());

  let hourTime = Number(time.getHours()) % 12 || 12;
  let minuteTime = Number(time.getMinutes());
  let secondTime = Number(time.getSeconds());

  const hour = document.querySelector(".hour");
  const minute = document.querySelector(".minute");
  const second = document.querySelector(".second");

  let finalhourTime = 30 * hourTime;
  let finalminuteTime = 6 * minuteTime;
  let finalsecondTime = 6 * secondTime;

  setInterval(() => {
    hourTime = hourTime % 12 || 12;
    hour.style.transform = `translateY(-100%) rotate(${finalhourTime}deg)`;
    finalhourTime = (finalhourTime + 0.5 / 60) % 360;

    minuteTime = minuteTime % 60;
    minute.style.transform = `translateY(-100%) rotate(${finalminuteTime}deg)`;
    finalminuteTime = (finalminuteTime + 6 / 60) % 360;

    secondTime = secondTime % 60;
    second.style.transform = `translateY(-100%) rotate(${finalsecondTime}deg)`;
    finalsecondTime = (finalsecondTime + 6) % 360;
  }, 1000);
});
