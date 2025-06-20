let array = [];
let fetchedArray = [];

let answer = (prompt(
  "do you want to add or check user exist ? give 'add' or 'check'"
) ?? "novalue" ).toUpperCase() ;
console.log(answer);

let finalAnswer =
  answer == "ADD"
    ? add()
    : answer == "CHECK"
      ? check()
      : prompt("write the correct value give 'add' or 'check' ");

function add() {
  let Name = prompt("enter name");
  let Age = prompt("enter age");
  array.push({ name: Name, age: Age });
  console.log(array);
  window.localStorage.setItem("userDetails", JSON.stringify(array));
  alert("Successfully added user")
  if (confirm("do you want to add more user")) add()
    
  
}
async function check() {
  let bool = false;
  let fetchStorage = window.localStorage.getItem("userDetails") || "[]";
  fetchedArray = await JSON.parse(fetchStorage);
  let Name = prompt("enter name");
  let Age = prompt("enter age");
  fetchedArray.forEach((element) => {
    if (element.name == Name && element.age == Age) {
      bool = true;
      return;
    }
  });
  if (bool) alert("user data found");
  else alert("no such user exist");
   if (confirm("do you want to check other user")) check()
}

document.addEventListener('DOMContentLoaded', ()=>{
  const body = document.querySelector("body")
        const color = ["red","brown","orange","green","voilet","pink","blue"]
        let ind = 0
        setInterval(() => {
            body.style.backgroundColor = color[ind++] || "black"
            ind = ind > color.length - 1? 0 : ind
        }, 300);
})