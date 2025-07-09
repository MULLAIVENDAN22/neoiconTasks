const add = document.querySelector(".addbtn");
const tasks = new Map();
const set = new Set();
const display = [];
const remaining = [];

let index = 1;

add.addEventListener("click", (e) => {
  const txt = e.target.previousElementSibling;
  if (set.has(txt.value)) {
    txt.value = "";
    txt.setAttribute("placeholder", "task already exist");
    repeater();
    return;
  } else if (txt.value) {
    addTask(txt.value);
    txt.value = "";
  } else {
    txt.setAttribute("placeholder", "input is empty");
    repeater();
    return;
  }
  function repeater() {
    setTimeout(() => {
      add.classList.toggle("negative");
    }, 500);
    setTimeout(() => {
      txt.setAttribute("placeholder", "add your task");
      add.classList.toggle("negative");
    }, 2000);
  }
});

const content = document.querySelector(".content");

function addTask(str) {
  set.add(str);
  tasks.set(index, str);
  display.push();
  content.innerHTML += `<div class="task" data-count = ${index}>
          <div class="circle"></div>
          <span>${str}</span>
          <button>
            <img class="editbtn" src="icons8-pen-50.png" alt="" srcset="" />
          </button>
          <button>
            <img
             class="tick hide"
              src="https://static.vecteezy.com/system/resources/previews/026/381/263/original/check-mark-symbol-tick-symbol-survey-selection-sign-vector.jpg"
              alt=""
              srcset=""
            />
          </button>
          <button><img class="delete" src="icons8-dustbin-66.png" alt=""></button>
        </div>`;

  console.log(set, tasks);
  index++;
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("editbtn")) editTask(e);
  if (e.target.classList.contains("delete")) deleteTask(e);
  if (e.target.classList.contains("tick")) tickTask(e);
  if (e.target.classList.contains("circle")) circleTask(e);
  if (e.target.classList.contains("back")) backTask(e);
});

function editTask(e) {
  e.target.classList.toggle("hide");
  const task = e.target.closest(".task");
  task.querySelector(".tick").classList.toggle("hide");
  const span = task.querySelector("span");
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.value = span.innerText;
  input.focus();
  span.classList.toggle("hide");
  span.insertAdjacentElement("afterend", input);
}

function tickTask(e) {
  console.log("tick clicked");
  e.target.classList.toggle("hide");
  const task = e.target.closest(".task");
  task.querySelector(".editbtn").classList.toggle("hide");
  const input = task.querySelector("input");
  const span = task.querySelector("span");
  span.classList.toggle("hide");
  span.innerText = input.value;
  input.remove();
  tasks.set(Number(task.dataset.count), span.innerText);
  console.log(tasks);
}

function deleteTask(e) {
  console.log("delete clicked");
  e.target.closest(".task").remove();
  tasks.delete(Number(e.target.closest(".task").dataset.count));
  set.delete(e.target.closest(".task").querySelector("span").innerText);
  console.log(tasks);
}
function circleTask(e) {
  console.log("circle clicked");
  const task = e.target.closest(".task");
  const span = task.querySelector("span");
  span.classList.toggle("strikethrough");
  e.target.classList.toggle("colour");
}

let mainContent,
  timer,
  updatedKey = [],
  maintask,
  updatedContent;
const search = document.querySelector(".search");

search.addEventListener("click", (e) => {
  const main = e.target.closest(".main");
  const input = main.querySelector("input");
  main.querySelector(".addbtn").classList.add("hide");
  main.querySelector(".back").classList.remove("hide");
  input.setAttribute("placeholder", "Search here...");
  mainContent = content.innerHTML;
  maintask = [...document.querySelectorAll(".task")];
  console.log(maintask);

  input.addEventListener("input", (e) => {
    const back = document.querySelector(".back");
    if (back.classList.contains("hide")) {
      return;
    }
    typing(e, 1100);
  });

  function typing(e, delay) {
    if (!e.target.value) return;
    clearTimeout(timer);
    timer = setTimeout(() => {
      
      if (updatedKey) {
        updatedContent = [...content.querySelectorAll(".task")];
        console.log(updatedContent);
        updatedContent.forEach((element) => {
          maintask.forEach((tt, index1) => {
            if (tt.dataset.count == element.dataset.count)
              maintask[index] = element;
          });
        });
      }
      content.innerText = "";
      updatedContent = [];
      updatedKey = [];

      maintask.forEach((element, index) => {
        let span = element.querySelector("span");
        let str = String(span.innerText);
        if (str.includes(e.target.value)) {
          updatedKey.push(Number(element.dataset.count));
          console.log(str, e.target.value);
        }
      });
      display();
    }, delay);
  }

  function display() {
    updatedKey.forEach((element) => {
      maintask.forEach((tt) => {
        if (tt.dataset.count == element) content.appendChild(tt);
      });
    });
  }
});

function backTask(e) {
  content.innerHTML = "";
  const main = e.target.closest(".main");
  console.log("back clicked");
  const input = main.querySelector("input");
  input.value = "";
  input.setAttribute("placeholder", "add your task");
  main.querySelector(".addbtn").classList.toggle("hide");
  main.querySelector(".back").classList.toggle("hide");
  console.log(maintask);
  maintask.forEach((element) => {
    content.appendChild(element);
  });
}
