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

//-------------------------------------------------------

// NEOICON CLASS PRACTICE 06

/*
//Print all prime numbers from 1 to 50
const primeNo = (from, to) => {
  for (let i = from; i <= to; i++) {
    let count = 0;
    for (let j = 2; j <= i; j++) {
      if (i % j == 0) {
        ++count;
        if (count > 1) break;
      }
    }
    if (count == 1) console.log(i);
  }
};

primeNo(1, 50);
*/

/*
//Find the sum of prime numbers between 1 to 100

const primeSum = (from, to) => {
  let total = 0;
  for (let i = from; i <= to; i++) {
    let count = 0;
    for (let j = 2; j <= i; j++) {
      if (i % j == 0) {
        ++count;
        if (count > 1) break;
      }
    }
    if (count <= 1) total += i;
  }
  return total;
};

console.log(primeSum(1, 100));
*/

/*
// Count the number of digits in a number

const sumOfDigits = (num) => {
  let total = 0;
  let string = String(num);
  for (let i = 0; i < string.length; i++) {
    total += Number(string.charAt(i));
  }
  return total;
};
console.log(sumOfDigits(12345));

//other  method

const sumOfDigits = (num) => {
  let total = 0;

  return String(num).split('').reduce((acc,current)=> {return acc+Number(current)},0);
};
console.log(sumOfDigits(12345));

//other  method

const sumOfDigits = (num) => {
  let total = 0;
  while (num > 0) {
    total += num % 10;
    num = Math.trunc(num / 10);
  }
  return total;
};
console.log(sumOfDigits(12345));

*/

//-------------------------------------------------------

// NEOICON TEST 01    20/6/2025

/*
// Write a program to generate the Fibonacci series up to n terms using for loop.

const fibonacciSeries = (n) => {
  let a = -1,
    b = 1,
    c
  for (let index = 1; index <= n; index++) {
    c = a+b
    console.log(c);
    a = b
    b = c
  }
};
fibonacciSeries(10);

*/

/*
// Create a program that takes marks as input and displays the grade using if-else if-else:
// •	90+ = A
// •	75–89 = B
// •	60–74 = C
// •	<60 = Fail

const grade = (marks) => {
  return marks >= 90 ? "A" : marks >= 75 ? "B" : marks >= 60 ? "C" : "FAIL";
};
console.log(grade);
*/

/*
// .Create a function that accepts two numbers and an operator (+, -, *, /) and returns the result.

const add = (a,b) => {
  return a + b;
};
const sub = (a,b) => {
  return a - b;
};
const multiply = (a,b) => {
  return a * b;
};
const divide = (a,b) => {
  return a / b;
};

console.log(add(10, 20), sub(50, 30), multiply(5, 10), divide(100, 2));
*/

//-------------------------------------------------------

// NEOICON CLASS PRACTICE 07

/*

// Create an object called student with the following:

// A property name to store the student's name.

// A property marks to store the student's marks out of 100.

// A method getGrade() that returns the grade of the student based on the marks.

const student = {
  name: "John Doe",
  marks: 50,
  grade() {
    return this.marks >= 90
      ? "A"
      : this.marks >= 75
        ? "B"
        : this.marks >= 60
          ? "C"
          : "FAIL";
  },
};

console.log(student);
console.log(student.grade());

*/

//-------------------------------------------------------

// NEOICON CLASS PRACTICE 08

/*

class Book {
  constructor(title, year, type) {
    this.title = title;
    this.year = year;
    this.type = type;
  }
  printing() {
    console.log(
      "title : " + this.title + " year : " + this.year + " type : " + this.type
    );
  }
}

const book1 = new Book("Harry Potters", 2020, "fantasy thriller");
const book2 = new Book("story", 2000, "action adventure");

console.log(book1, typeof book1);
console.log(book2, typeof book2);
book1.printing();
book2.printing();

// Create a constructor function called Student which takes the following parameters:

// name (string)
// math (number)
// science (number)
// english (number)

// Add the following methods:
// getAverage() – Calculates and returns the average of all three marks.
// getGrade() – Returns the grade based on the average:
// Average >= 90: Grade A
// 70 <= Average < 90: Grade B
// 50 <= Average < 70: Grade C
// Else: Grade F

class Student {
  constructor(name, maths, science, english) {
    this.name = name;
    this.maths = maths;
    this.science = science;
    this.english = english;
  }

  getAverage() {
    return ((this.maths + this.science + this.english) / 3).toFixed(2);
  }
  grade() {
    let average = this.getAverage();
    return average >= 90
      ? "A"
      : average >= 70
        ? "B"
        : average >= 50
          ? "C"
          : "F";
  }
}

const student1 = new Student("mullai", 90, 95, 85);
const student2 = new Student("vendan", 50, 80, 40);

console.log(student1);
console.log(student1.getAverage());
console.log(student1.grade());
console.log(student2);
console.log(student2.getAverage());
console.log(student2.grade());

function sports(name, players) {
  return { name: name, players: players };
}

const cricket = sports("cricket", 11);
console.log(cricket, typeof cricket);

*/

//-------------------------------------------------------

// NEOICON CLASS PRACTICE 09

/*

// Given an array of Student objects, filter out students who scored below 60, then return a list of their
// names in uppercase, sorted by marks descending.

const students = [
  { name: "Arjun", marks: 84 },
  { name: "Priya", marks: 72 },
  { name: "Karthik", marks: 35 },
  { name: "Meena", marks: 11 },
  { name: "Rahul", marks: 58 },
  { name: "Sneha", marks: 88 },
  { name: "Vikram", marks: 40 },
  { name: "Divya", marks: 29 },
  { name: "Manoj", marks: 95 },
  { name: "Anjali", marks: 68 },
];

students
  .sort((a, b) => b.marks - a.marks)
  .filter((value) => value.marks < 60)
  .forEach((value) => {
    console.log(
      "name : " + value.name.toUpperCase() + " mark : " + value.marks
    );
  });

// forEach – Print Odd and Even Separately ,Given an array of numbers, use forEach() twice: Print all
// even numbers in one line Then all odd numbers in another line

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach((value) => {
  if (value % 2 == 0) process.stdout.write(value + " ");
});

console.log(" ");

numbers.forEach((value) => {
  if (value % 2 != 0) process.stdout.write(value + " ");
});

console.log(" ");

// Given String allowed and String[] words, count how many words consist solely of characters from allowed.
// Stream Insight: Use .filter() on words.stream() and inside use word.chars().allMatch(...).
// (See discussion on using map() + reduce() versus allMatch())

let string = "abc";
const arr = ["a", "b", "ab", "d", "ace", "cab"];

const matches = (str, array) => {
  str = str.split("");
  let result = array.filter((value) => {
    value = value.split("");
    if (value.every((n) => str.includes(n))) 
      return value.join(" ");
  });
  console.log("filtered array " + result);
  return result.length;
};

console.log("count ", matches(string, arr));

*/

//-------------------------------------------------------

// NEOICON CLASS PRACTICE 10

/*

// fibonocci using recursion

let a = -1,
  b = 1,
  c;
const fibonacciSeries = (n) => {
  if (n < 1) {
    return;
  }
  c = a + b;
  console.log(c);
  a = b;
  b = c;
  fibonacciSeries(n - 1);
};
fibonacciSeries(10);

*/

//-------------------------------------------------------

// NEOICON CLASS PRACTICE 11

/*

// Convert each date to its month name using map()


const month = new Map();
month.set(1, "January");
month.set(2, "February");
month.set(3, "March");
month.set(4, "April");
month.set(5, "May");
month.set(6, "June");
month.set(7, "July");
month.set(8, "August");
month.set(9, "September");
month.set(10, "October");
month.set(11, "November");
month.set(12, "December");

const dates = ['2022-01-01', '2022-02-14', '2022-03-21', '2022-04-15', '2022-05-01'];

let months = (date) =>{
  date.forEach((element,index)=>{
    let array = element.split("-")
    date[index] = Number(array[1])
  })
  console.log(date);
  
  return date.map((element)=>{
    return String(month.get(element))
  })
}

console.log(months(dates));

*/

//-------------------------------------------------------

// NEOICON CLASS PRACTICE 12

/*

// Write a JavaScript program that: Stores an array of 5 student names.Uses a for loop to write each name into
// a file named students.txt, one per line.After writing, read the file and display the content in the console

// Declares a student's name and marks as variables. Create a function checkResult(marks) that: Returns a Promise. If marks
// are >= 40, the promise resolves with the message: If marks are below 40, the promise rejects with: Use .then()
// and .catch() to handle the promise result. Do not use async/await.

const students = [
  { name: "jeagan", mark: 70 },
  { name: "mullai", mark: 80 },
  { name: "dani", mark: 90 },
  { name: "arul", mark: 100 },
  { name: "vignesh", mark: 30 },
];

function checkResult(element) {
  let promise = new Promise((res, rej) => {
    if (element.mark >= 40) {
      res(element);
    } else {
      rej(element);
    }
  });
  return promise;
}

function passingStudent(student) {
  student.forEach((element) => {
    checkResult(element)
      .then((data) => {
        console.log(
          "name : ",
          data.name,
          "mark : ",
          data.mark,
          " result : ",
          "passed"
        );
      })
      .catch((data) => {
        console.log(
          "name : ",
          data.name,
          "mark : ",
          data.mark,
          " result : ",
          "failed"
        );
      });
  });
}

passingStudent(students)

*/

