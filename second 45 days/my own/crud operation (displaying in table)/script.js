const tbody = document.querySelector("tbody");
let users = 

// window.localStorage.setItem("CRUD-users",JSON.stringify(users))

document.addEventListener("DOMContentLoaded", async () => {
  if (localStorage.getItem("CRUD-users")) {
  users = await JSON.parse(localStorage.getItem("CRUD-users"));
} else {
  users = [
    { name: "Sam", age: 15, city: "Chennai", salary: 10500 },
    { name: "Ravi", age: 22, city: "Namakkal", salary: 12000 },
    { name: "Joes", age: 18, city: "Hosur", salary: 6000 },
    { name: "Aureen", age: 47, city: "Dharmapuri", salary: 10000 },
    { name: "aravind", age: 10, city: "Salem", salary: 8000 },
    { name: "Ram", age: 12, city: "Salem", salary: 10000 },
  ];
  localStorage.setItem("CRUD-users", JSON.stringify(users));
}
  users.forEach((value) => {
    tbody.innerHTML += `
     <tr>
        <td>${value.name}</td>
        <td>${value.age}</td>
        <td>${value.city}</td>
        <td>${value.salary}</td>
        <td>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </td>
    </tr>        
    `;
  });
  console.log("loaded successfully",users);
    
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit")) editbtn(e);
  if (e.target.classList.contains("delete")) deletebtn(e);
  if (e.target.classList.contains("submit")) submit(e);
});

const fname = document.getElementById("fname");
const age = document.getElementById("fage");
const city = document.getElementById("faddress");
const salary = document.getElementById("fsalary");
function submit(e) {
  e.preventDefault()
  if (changes) {
    Alternatesubmit();
    return
  }
  tbody.innerHTML += `
     <tr>
        <td>${fname.value}</td>
        <td>${age.value}</td>
        <td>${city.value}</td>
        <td>${salary.value}</td>
        <td>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </td>
    </tr>        
    `;
  users.push({
    name: fname.value,
    age: age.value,
    city: city.value,
    salary: salary.value,
  });
  window.localStorage.setItem("CRUD-users", JSON.stringify(users));
  document.querySelector("form").reset();
  console.log("added Successfully", users);
}


let index,
  changes = false;

function editbtn(e) {
  e.preventDefault();
  const row = e.target.parentNode.parentNode;
  fname.value = row.children[0].textContent;
  age.value = row.children[1].textContent;
  city.value = row.children[2].textContent;
  salary.value = row.children[3].textContent;
  users.forEach((user, uindex) => {
    if (row.children[0].textContent == user.name) {
      index = uindex;
      changes = true;
    }
  });
}

function Alternatesubmit() {
  users.splice(index, 1, {
    name: fname.value,
    age: age.value,
    city: city.value,
    salary: salary.value,
  });
  window.localStorage.setItem("CRUD-users", JSON.stringify(users));
  document.querySelector("form").reset();
  setTimeout(() => {
    location.reload();
  }, 1000);
  console.log("edited Successfully", users);
}

function deletebtn(e) {
  e.preventDefault();
  const row = e.target.parentNode.parentNode;
  let dname = row.children[0].textContent;
  users.forEach((user, uindex) => {
    if (dname == user.name) {
      index = uindex;
    }
  });
  console.log(index);
  users.splice(index, 1);
  document.querySelector("form").reset();
  window.localStorage.setItem("CRUD-users", JSON.stringify(users));
  setTimeout(() => {
    location.reload();
  }, 1000);
  console.log("deleted Successfully", users);
}
