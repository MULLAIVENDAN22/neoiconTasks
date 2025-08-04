const buttons = document.querySelector(".buttons");
const input = document.getElementById("calcInput");
// input.value =  "((6 + 2) × sin(90)) × 2" 

// "sin(30) + cos(60)"             // Test trig functions inside parentheses
// "√(144) + tan(45)"              // Root + tan in same line
// "(6 + 2) × sin(90)"             // Grouping + multiplication with trig
// "√(81) ÷ (9 − 3)"               // Nested expression with root and grouping
// "sin(0) + cos(0) + tan(0)"      // All trig at angle zero
// "9 + √(100) − sin(45)"          // Mixed operations with root and sin
// "(5 + cos(30)) × 2"             // Cos inside parentheses within expression
// "tan(60) − √(36)"               // Trig minus root
// "(3 + 7) × (sin(90) + √(49))"   // Grouping + mix of trig & root
// "√(√(256)) + sin(60)"           // Nested root + trig

const buttonArray = [
  "AC",
  "%",
  "C",
  "=",
  "÷",
  "6",
  "7",
  "8",
  "9",
  "×",
  "2",
  "3",
  "4",
  "5",
  "−",
  "(",
  ")",
  "0",
  "1",
  "+",
  // "sin",
  // "cos",
  // "tan",
  // "√",
  // "00",
];

document.addEventListener("DOMContentLoaded", () => {
  buttonArray.forEach((value) => {
    buttons.innerHTML += `<button class="key">${value}</button>`;
  });
  const key = document.querySelectorAll(".key");
  console.log(key);

  input.addEventListener("input", (e) => {
    e.preventDefault()
    e.target.value = ""
    // const cleaned = e.target.value.trim().replace(/\D/, "");
    // if (e.target.value !== cleaned) {
    //   e.target.value = cleaned;
    // }
  });

  key.forEach((value) => {
    value.addEventListener("click", (e) => {
      console.log(e.target.innerHTML);
      let input = document.querySelector("input");
      switch (e.target.innerHTML.toLowerCase()) {
        case "ac":
          input.value = "";
          break;

        case "c":
          input.value = input.value
            .split("")
            .slice(0, length - 1)
            .join("");
            lastIput = input.value
          break;

        case "÷":
          input.value += "/";
          break;

        case "×":
          input.value += "*";
          break;

        case "−":
          input.value += "-";
          break;

        case "=":
          finalCalculation();
          break;

        default:
          input.value += e.target.innerHTML;
          break;
      }
    });
  });

  let calculation;
  function finalCalculation() {
    console.log("cal clicked");
    if (input.value == "") {
      timeout()
      return
    }
    // let count = 0
    // let finalInput = input.value.trim().split("")
    calculation = input.value
    input.value = eval(calculation)
    console.log(calculation,eval(calculation));
    
  }

  function timeout() {
    input.setAttribute("placeholder","enter the calculation")
    setTimeout(() => {
      input.setAttribute("placeholder","")
    }, 1500);
  }
});
