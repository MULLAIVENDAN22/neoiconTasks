// console.log("hi everyone");
// let a = 20,
//   b = 40;
// console.log(a, b);
// let arr = [];
// for (let i = 0; i < 10; i++) arr.push(i+1);
// console.log(arr, arr.length);

//---------------------------------------------

// let arr = [];
// for (let i = 0; i < 5; i++) {
//   arr.push([]);
//   for (let j = 0; j < 5; j++) {
//     arr[i].push(j)
//   }
// }
// console.log(arr);
// console.table(arr);

//---------------------------------------------

// let names = ["Tiya", "Ram", "Sam", "Raja", "Kumar"];
// for (let name of names) {
//     console.log(name);
// }

//---------------------------------------------

// let user = {
//   name: "Tutor Joes",
//   age: 35,
//   city: "Salem",
//   contact: "9043017689",
// };

// for (const att in user) {
//     console.log(att+" - "+user[att]);

// }

//---------------------------------------------

// for (let i = 1; i < 11; i++) {
//   if (i % 2 != 0) continue;
//   console.log(i);
// }

//---------------------------------------------

// let groups = [
//   ["Ram", "Sam", "Ravi"],
//   ["Kumar", "Tiya", "Sundar"],
//   ["Rajesh", "Sara", "Rahul"],
// ];

// for (let no of groups) {
//   for (let names of no) {
//     if (names.startsWith("R")) {
//       console.log(names);
//       break;
//     }
//   }
// }

//---------------------------------------------

// for (let index = 0; index < 21; index++) {
//   console.log(Math.trunc(Math.random() * 10 +1));
// }

//---------------------------------------------

// const number = [1,2,3,4,5]
// let total = 0;

// number.forEach((value,index)=>{
//   total += value;
//   if (index == number.length-1) {
//     console.log(total );

//   }
// })

// console.log(total);

//---------------------------------------------

// const users =[
//   {name:"Sam",age:15,city:"Chennai",salary:10500},
//   {name:"Ravi",age:22,city:"Namakkal",salary:12000},
//   {name:"Joes",age:18,city:"Hosur",salary:6000},
//   {name:"Aureen",age:47,city:"Dharmapuri",salary:10000},
//   {name:"Stanley",age:10,city:"Salem",salary:8000},
//   {name:"Ram",age:12,city:"Salem",salary:10000},
// ];

// let eligible = users.map((user)=>({
//   name:user.name,
//   age:user.age,
//   city:user.city,
//   salary:user.salary,
//   eligible:user.age>17?"eligible":"not eligible"
// }))

// console.table(eligible);

//---------------------------------------------

// const fruit = ["apple", "banana"];
// const color = ["red", "yellow"];

// const combine = fruit.map((value,index)=>({
//   value:color[index]
// }))

// console.log(combine);

//---------------------------------------------

// const number = [1, 2, 3, 4, 5];

// const even1 = number.map((number) =>{ return number % 2 == 0});
// const even2 = number.filter((number) => number % 2 == 0);
// console.log(even1, even2);

//---------------------------------------------

// const multiarray = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// const singlearray = multiarray.reduce((acc, value) => {
//   return acc.concat(value);
// });

// console.log(singlearray);

//---------------------------------------------

// const colours = ["red", "yellow", "blue", "green", "yellow", "blue", "green"];
// const unique = colours.reduce((acc, value) => {
//   if (value in acc) acc[value]++;
//   else acc[value] = 1;
//   return acc;
// }, {});
// console.log(unique);

//---------------------------------------------

// const users = [
//   { name: "Sam", age: 15, city: "Chennai", salary: 10500 },
//   { name: "Ravi", age: 22, city: "Namakkal", salary: 12000 },
//   { name: "Joes", age: 18, city: "Hosur", salary: 6000 },
//   { name: "Aureen", age: 47, city: "Dharmapuri", salary: 10000 },
//   { name: "Stanley", age: 10, city: "Salem", salary: 8000 },
//   { name: "Ram", age: 12, city: "Salem", salary: 10000 },
// ];

// const unique = users.reduce((acc, value) => {
//   if (value.city in acc) acc[value.city].push(value);
//   else acc[value.city] = [value];
//   return acc;
// }, {});
// console.log(unique);

//---------------------------------------------

// function total() {
//   console.log(this.address.street);
// }

// const user = {
//   name: "Ram",
//   address: {
//     street: "street1",
//   }
// };
// total.call(user);

//---------------------------------------------

// const eligiblity = {
//   eligiblity() {
//     return this.age > 17 ? "yes" : "no";
//   },
// };

// const users = Object.create(eligiblity);
// users.name = "Ram";
// users.age = 25;

// console.log(users.eligiblity());

//---------------------------------------------

/*
const setA = new Set([1, 2, 3]);
const setB = new Set([1, 2, 3, 4, 5, 6]);
const setC = new Set([1, 5, 3, 4]);

Set.prototype.subset = function (otherset) {
  if (this.size > otherset.size) return false;
  else {
    for (let key of this) {
      if (otherset.has(key)) return true;
    }
    return false;
  }
};

console.log(setA.subset(setB));

Set.prototype.union = function (otherset) {
  for (const value of otherset) {
    this.add(value);
  }
  return this;
};

// console.log(setA.union(setC));

Set.prototype.difference = function (otherset) {
  for (const value of finalset) {
    this.delete(value);
  }
  return this;
};

 console.log(setB.difference(setA));
*/

//---------------------------------------------

// const a = function(){
//   console.log("hello");
// }();

// --------------------------------------------

/*
const promise = new Promise((res, rej) => {
  let a = 10 + 10;
  if (a == 20) res();
  else rej();
});

promise.then(() => console.log("resolve")).catch(() => console.log("reject"));

function settimoutPromise(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
}

settimoutPromise(2000)
  .then(() => {
    console.log("number 1");
    return settimoutPromise(3000);
  })
  .then(() => {
    console.log("number 2");
    return settimoutPromise(3000);
  })
  .then(() => {
    console.log("number 3");
    return settimoutPromise(4000);
  })
  .then(() => {
    console.log("number 4");
  })
  .catch(() => console.log("no number"));

  console.log("i am inevitable");
*/

//---------------------------------------------

/*
const results = (marks) => {
  return new Promise((resolve, reject) => {
    let total = 0,
      result = "pass";
    marks.forEach((mark) => {
      total += mark;
      if (mark < 50) {
        result = "fail";
      }
    });
    resolve({ total: total, result: result });
  });
};

const grades = (total) => {
  return new Promise((resolve, reject) => {
    if (total.result == "fail") {
      reject("fail no grade");
      return;
    }
    let finall = total.total;
    finall /= 3;
    console.log(finall);
    let grade =
      finall > 90
        ? "A"
        : finall > 80
          ? "B"
          : finall > 70
            ? "C"
            : finalll > 60
              ? "D"
              : "E";
    resolve(grade);
  });
};

*/

/*
result([80, 90, 40])
  .then((result) => {
    console.log("total ", result.total);
    console.log("result ", result.result);
    return grade(result);
  })
  .then((grade) => {
    console.log("grade ", grade);
  })
  .catch((err) => {
    console.error("fail", err);
  });
  */

/*
  
async function exam(marks) {
  try {
    let result = await results(marks);
    console.log("total ", result.total);
    console.log("result ", result.result);
    let grade = await grades(result);
    console.log("grade ", grade);
  } catch (error) {
    console.error(error);
  }
}


exam([80, 90, 90])

*/

//---------------------------------------------

/*
//DEBOUNCING
//<input id="txt" type="text" data-uppercase>

const button = document.getElementById("btn");
const text = document.getElementById("txt");
let count = 0;
let timer;
text.addEventListener("input", (e) => {
  if(e.target.dataset.uppercase != undefined){
    e.target.value = e.target.value.toUpperCase()
  }
  console.log("count ", count++);

  mainFunction(e,1000);
});

function mainFunction(e, delay = 3000) {
  clearTimeout(timer);
  timer = setTimeout(() => {
    console.log(e.target.value);
    console.log(delay);
  }, delay);
}

*/

//---------------------------------------------
// printing squares
/*
let total = 2,
  count = 10;

//method 1
for (let index = 0; index <= count; index++) {
  console.log(`2^${index} = ${Math.pow(total, index)}`);
}

//method 2
console.log("2^0 = 1");
for (let index = 1; index <= count; index++) {
  let value = total * 2;
  console.log(`2^${index} = ${value}`);
  total = value;
}

//method 3
console.log("2^0 = 1");
for (let index = 1; index <= count; index++) {
  console.log(`2^${index} = ${2 ** index}`);
}

*/

//---------------------------------------------

//forEach - (value,index,array)  - return value or statement
// - printing item (for loop)
// - orginal array
// const array = [1,2,3,4,5,6,7,8]
// array.forEach((value,index)=>{
//   array[index] = value*2
// })
// console.log(array);

//forEach - (value,index,array)  - return value or statement
// - printing item (for loop)
// - orginal array
let array;

const users = [
  { name: "Sam", age: 15, city: "Chennai", salary: 10500 },
  { name: "Ravi", age: 22, city: "Namakkal", salary: 12000 },
  { name: "Joes", age: 18, city: "Hosur", salary: 6000 },
  { name: "Aureen", age: 47, city: "Dharmapuri", salary: 10000 },
  { name: "Stanley", age: 10, city: "Salem", salary: 8000 },
  { name: "Ram", age: 12, city: "Salem", salary: 10000 },
];
// window.localStorage.setItem("users",JSON.stringify(users))
document.addEventListener("DOMContentLoaded", async () => {
  array = window.localStorage.getItem("users") || "[]";
  const parsedArray = await JSON.parse(array);
  console.log(parsedArray);

  let dummyarray = users.filter((user, index) => {
    return index != 2;
  });
  console.log(dummyarray);
  window.localStorage.setItem("users", JSON.stringify(dummyarray));
});
