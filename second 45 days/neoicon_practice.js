// NEOICON CLASS PRACTICE 01
/*
let pname = "iphone",pprice = 50000,tax = 2000;
console.log("product name ",pname);
console.log("price incl tax ",pprice+tax);

let fname = "Apple", fprice = 200;
const total = (count)=>{
 let total = fprice*count;
  return [total,count]
}
let mtotal = total(5)
console.log("fruit name ",fname);
console.log(`for ${mtotal[1]} of apple the price is ${mtotal[0]}`);
*/

//-------------------------------------------------------

// NEOICON CLASS PRACTICE 02

/*
// A bike consumes 1 liter fuel for every 10 km.Each trip reduces fuel, and refueling increases it.

function bikeTrip(liter,distance,refill) {
  liter+=refill
  let finalltr = ((liter*10)%distance)/10
  console.log(`before travelling bike has ${liter}ltr`);
  console.log(`after travelling ${distance}km bike has ${finalltr}ltr `);
  console.log("before travelling bike has ",liter,"liters");
  
}
bikeTrip(5,55,2);
*/

/*
// You are creating a simple game where players gain or lose points. You want to: Increase the player's
// score before showing it when they collect a bonus (pre-increment).Show the current score when a player
// loses a point but decrement after showing it (post-decrement).Keep track of total bonuses collected
// and penalties applied using increments.

let point = 50
const addpoint = () =>{
  return ++point;
}
const removepoint = () =>{
  return --point;
}
const addBonuspoint = (value) =>{
  return point+=value;
}

console.log(addpoint());
console.log(addBonuspoint(5));
console.log(removepoint());
*/

//-------------------------------------------------------

// NEOICON CLASS PRACTICE 03

/*
// A product costs $49.99 and the user wants to buy 3 items. How would you calculate the total price?

const totalPrice = (totalItem, productPrice = 49.99) =>{
  return totalItem * productPrice
}

console.log(totalPrice(3));

*/

/*

// total quantity
const totalQuantity = function (...args){
  return args.reduce((acc,current)=>{
    return acc+current
  },0)
}

console.log(totalQuantity(3,4,5,6));
*/

//-------------------------------------------------------

// NEOICON CLASS PRACTICE 04

/*
// function

function favourate(actor, player, movie, game) {
  console.log(actor);
  console.log(player);
  console.log(movie);
  console.log(game);
}
favourate("Tom Cruse", "Ms Dhoni", "IP Man 4", "Black Myth Wukong");
*/

/*
//function inside function

function multiple() {
  console.log("multiple function gets excuted");

  function left() {
    console.log("left function gets excuted");
  }

  function right() {
    console.log("right function gets excuted");
  }

  return { left, right };
}

multiple();
multiple().left();
multiple().right();

*/

//-------------------------------------------------------

// NEOICON CLASS PRACTICE 05

/*

// .Login Attempt Limiter, Use if-else to simulate this login attempt logic.

let login_count = 5
let login_limit = 10
if(login_count > login_limit)
  console.log("login count reached");
else
  console.log("login count is below limit");
  
*/

/*
//login checking using prompt

let text = prompt("Enter Your Name");
let password = prompt("Enter Your Password");
let obj = { username: "mullai", Pass: 2222 };

if (obj.username == text && obj.Pass == password) {
  alert("User found");
} else {
  alert("no such user exist");
}

*/

// //-------------------------------------------------------

// // NEOICON CLASS PRACTICE 06

// /*
// //Print all prime numbers from 1 to 50
// const primeNo = (from, to) => {
//   for (let i = from; i <= to; i++) {
//     let count = 0;
//     for (let j = 2; j <= i; j++) {
//       if (i % j == 0) {
//         ++count;
//         if (count > 1) break;
//       }
//     }
//     if (count == 1) console.log(i);
//   }
// };

// primeNo(1, 50);
// */

// /*
// //Find the sum of prime numbers between 1 to 100

// const primeSum = (from, to) => {
//   let total = 0;
//   for (let i = from; i <= to; i++) {
//     let count = 0;
//     for (let j = 2; j <= i; j++) {
//       if (i % j == 0) {
//         ++count;
//         if (count > 1) break;
//       }
//     }
//     if (count <= 1) total += i;
//   }
//   return total;
// };

// console.log(primeSum(1, 100));
// */

// /*
// // Count the number of digits in a number

// const sumOfDigits = (num) => {
//   let total = 0;
//   let string = String(num);
//   for (let i = 0; i < string.length; i++) {
//     total += Number(string.charAt(i));
//   }
//   return total;
// };
// console.log(sumOfDigits(12345));

// //other  method

// const sumOfDigits = (num) => {
//   let total = 0;

//   return String(num).split('').reduce((acc,current)=> {return acc+Number(current)},0);
// };
// console.log(sumOfDigits(12345));

// //other  method

// const sumOfDigits = (num) => {
//   let total = 0;
//   while (num > 0) {
//     total += num % 10;
//     num = Math.trunc(num / 10);
//   }
//   return total;
// };
// console.log(sumOfDigits(12345));

// */

// //-------------------------------------------------------

// // NEOICON TEST 01    20/6/2025

// // Write a program to generate the Fibonacci series up to n terms using for loop.

// const fibonacciSeries = (n) => {
//   let a = -1,
//     b = 1,
//     c
//   for (let index = 1; index <= n; index++) {
//     c = a+b
//     console.log(c);
//     a = b
//     b = c
//   }
// };
// fibonacciSeries(10);

// // Create a program that takes marks as input and displays the grade using if-else if-else:
// // •	90+ = A
// // •	75–89 = B
// // •	60–74 = C
// // •	<60 = Fail

// const grade = (marks) => {
//   return marks >= 90 ? "A" : marks >= 75 ? "B" : marks >= 60 ? "C" : "FAIL";
// };
// console.log(grade);

// // .Create a function that accepts two numbers and an operator (+, -, *, /) and returns the result.

// const add = (a,b) => {
//   return a + b;
// };
// const sub = (a,b) => {
//   return a - b;
// };
// const multiply = (a,b) => {
//   return a * b;
// };
// const divide = (a,b) => {
//   return a / b;
// };

// console.log(add(10, 20), sub(50, 30), multiply(5, 10), divide(100, 2));

// function operation(a, b, name) {
//   let total = "error";
//   const addition = () => {
//     total = a + b;
//   };
//   const sub = () => {
//     total = a - b;
//   };
//   name == "add" ? addition() : name == "sub" ? sub() : "nothing";
//   return total;
// }
// console.log(operation(30, 20, "sub"));

