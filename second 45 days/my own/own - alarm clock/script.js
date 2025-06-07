const h1 = document.querySelector("h1");
let alarm = false;
let snooze = "time";
const button = document.getElementById("btn")

setInterval(() => {
  const date = new Date();
  const hours = date.getHours();
  const clockHours = (hours % 12 || 12).toString();
  const clockMin = date.getMinutes().toString();
  const ampm = date.getHours() > 11 ? "PM" : "AM";
  let issnooze = false;
  if (alarm) {
    const value = snooze.toString().split(" ");
    console.log(value);
    
    if (value.length == 3 && value[0] == clockHours && value[1] == clockMin && value[2].toUpperCase() == ampm) {
      issnooze = confirm(
        "your alarm time is reached . do you want to snooze for 5min click ok orelse click cancel"
      );
      if (issnooze) {
        if(Number(value[1]) > 55){
          value [0] = ((Number(value[0])++) % 12 || 12).toString()
          value [1] = (value[1] % 5 - 1).toString()
        }
        else{
          value [1] = (Number(value[1]) + 5).toString()
        }
        snooze = `${value[0]} ${value[1]} ${value[2]}`;
      }
      else{
        alarm = false
        button.disabled = false
      }
      
    }
  }
  h1.innerHTML = `${clockHours.padStart(2, "0")} : ${clockMin.padStart(2, "0")} : ${date.getSeconds().toString().padStart(2, "0")}  ${ampm}`;
  console.log(date.getHours(), date.getMinutes());
}, 1000);

function setAlarm() {
  snooze = prompt("write the timing (for Eg - 12 34 am)");
  console.log(snooze);
  if (snooze != "time") {
    alarm = true;
    button.disabled = true
  }
}
