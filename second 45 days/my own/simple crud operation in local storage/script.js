const addbtn = document.getElementById("add_button");
const ul = document.getElementById("list");
const container = document.querySelector(".container");

const details = document.querySelector(".details");

let array = [];

addbtn.addEventListener("click", () => {
  let nameAge = prompt("enter the name and age (eg ram 20) ");
  if (nameAge) {
    addDetails(nameAge);
  }
  return;
});

function addDetails(nameAge) {
  if (!array.includes(nameAge)) {
    array.push(nameAge);
    let li = document.createElement("li");
    li.innerHTML = `
          <div class="names">${nameAge}</div>
          <div class="btn">
            <button class="edit_button">Edit</button>
            <button class="delete_button">Delete</button>
          </div>
         `;
    ul.appendChild(li);

    window.localStorage.setItem("details", JSON.stringify(array));
  }
}

function FirstaddDetails(nameAge) {
  let li = document.createElement("li");
  li.innerHTML = `
          <div class="names">${nameAge}</div>
          <div class="btn">
            <button class="edit_button">Edit</button>
            <button class="delete_button">Delete</button>
          </div>
         `;
  ul.appendChild(li);
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit_button")) editbtn(e);
  if (e.target.classList.contains("delete_button")) deletebtn(e);
});

function editbtn(e) {
  let nameAge = prompt("Renter the name and age (eg ram 20) ");
  if (!nameAge) return;
  let Target = e.target.parentElement.previousElementSibling.textContent;

  if (array.includes(Target)) {
    console.log(array.indexOf(Target));
    array.splice(array.indexOf(Target), 1, nameAge);
    console.log(array);
    e.target.parentElement.previousElementSibling.textContent = nameAge;
    window.localStorage.setItem("details", JSON.stringify(array));
  }
}

function deletebtn(e) {
  let conformdelete = confirm("Are you sure you want to delete ?");
  if (conformdelete) {
    let Target = e.target.parentElement.previousElementSibling.textContent;
    console.log(Target);

    if (array.includes(Target)) {
      console.log(array.indexOf(Target));
      array.splice(array.indexOf(Target), 1);
      console.log(array);
      window.localStorage.setItem("details", JSON.stringify(array));
    }
    e.target.parentElement.parentElement.remove();
  }
}

window.addEventListener("DOMContentLoaded", async () => {
  if (window.localStorage.getItem("details")) {
    let details = await JSON.parse(window.localStorage.getItem("details"));
    array = details;
    console.log(array);
    array.forEach((value) => {
      FirstaddDetails(value);
    });
  }
});
