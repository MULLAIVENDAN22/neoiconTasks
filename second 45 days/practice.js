// console.log("hi everyone");
// let a = 20,
//   b = 40;
// console.log(a, b);
// let arr = [];
// for (let i = 0; i < 10; i++) arr.push(i+1);
// console.log(arr, arr.length);

const { set } = require("mongoose");

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

/*
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

*/

//---------------------------------------------

// Js own pracice 01        Timing   1-10  to  2-20

/*

//Write a JavaScript function to calculate the sum of two numbers.

const sum = (a, b) => {
  return a + b;
};
console.log(sum(10, 20));

//Write a JavaScript program to find the maximum number in an array.
const array = [20, 34, 64, 78, 90];

//method 1
const maximum = array.reduce((acc, current) => {
  return Math.max(acc, current);
}, 0);
console.log(maximum);

//method 2
const maximum2 = Math.max(...array);
console.log(maximum2);

//method 3
const maximum3 = (arr) => {
  let max = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i];
  }
  return max;
};
console.log(maximum3(array));

//Write a JavaScript function to check if a given string is a palindrome

let value = 12321;

// method 1
const palindrome = (value) => {
  let str = String(value).split("");
  let mid = Math.trunc(str.length / 2);
  str = str.length % 2 == 0 ? str : str.splice(mid + 1, 1);
  let array = [];
  for (let index = 0; index < str.length; index++) {
    if (index < mid) {
      array.push(str[index]);
    } else {
      if (array.pop() != str[index]) return false;
    }
  }
  return true;
};

console.log(palindrome(value));

//method 2 using AI

const isPalindrome = (value) => {
  const str = String(value);
  return str === str.split("").reverse().join("");
};
console.log(isPalindrome(value));

//Write a JavaScript program to reverse a given string.

const reverseString = (value) => {
  return value.split("").reverse().join("");
};
console.log(reverseString("Hello World"));

//Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

const array1 = [21, 34, 645, 789, 90, 22];

const evenNumbers = (array) => {
  return array1.filter((value) => value % 2 == 0);
};
console.log(evenNumbers(array1));

//Write a JavaScript program to calculate the factorial of a given number.

//method 1
const factorial = (value) => {
  if (value < 1) return 1;
  return value * factorial(value - 1);
};

//method 2
const factorial1 = (value) => {
  let total = 1;
  while (value > 0) {
    total *= value--;
  }
  return total;
};

console.log(factorial(5),factorial1(5));

//Write a JavaScript function to check if a given number is prime. 

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

// Write a JavaScript program to find the largest element in a nested array. 

const arrays = [4, [15, 2], [9, [30, 7], 1], 12]
// const largest = (array) =>{
//   let arr = arrays.reduce((acc,current)=>{
//     return acc.concat(current)
//   },[])
//   console.log(arr);
  
// }


const largestInNestedArray = (array) =>{
  let max  = 0
  array.forEach(element => {
    if(typeof element == "object"){           // if (Array.isArray(element))    - AI suggestion
      max = Math.max(max, largestInNestedArray(element))
    }
    else{
      max = Math.max(max,element)
    }
  });
  return max
}

console.log(largestInNestedArray(arrays));
//  console.log(arrays.flat(Infinity));          --------> inBUllt keyword to flatened the array  - AI suggestion 

// Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms. 

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

// Write a JavaScript program to convert a string to title case (capitalize the first letter of each word). 

//method 1
const firstLetterCapitalize = (str) =>{
 let array = str.split(" ")
 console.log(array);
 
 array.forEach((value,index)=>{
  let result =  value.charAt(0).toUpperCase()
  value = value.split("")
  value.splice(0,1,result)
   array[index] = value.join("") 
 }) 
 return array.join(" ")
}

console.log(firstLetterCapitalize("hello world from mullaivendan"));

//method 2
const firstLetterCapitalize1 = (str) =>{
 let array = str.split(" ")
 array.forEach((value,index)=>{
  array[index] = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()   // this line  - AI suggestion
 })
 return array.join(" ")
}

console.log(firstLetterCapitalize1("hello world from mullaivendan"));

*/

//---------------------------------------------

// Js own pracice 02

/*

//Write a JavaScript function to find all possible palindrome in a string

const isPalindrome = (str) => {
  if (str === str.split("").reverse().join(""))
    console.log("palindrome : ", str);
};

let value = "madamracecarlevel";

const palindrome = (str) => {
  str = typeof str == "string" ? str : String(str);
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      isPalindrome(
        str
          .split("")
          .slice(i, j + 1)
          .join("")
      );
    }
  }
};

palindrome(value);

// Implement a debounce function in JavaScript that limits the frequency of a function’s
// execution when it’s called repeatedly within a specified time frame

// let timeout;
// const button = document.querySelector("input");

// button.addEventListener("keydown", (e) => {
//   clearTimeout(timeout);
//   timeout = setTimeout(() => {
//     let value = e.target.value;
//   }, 1000);
// });

// Write a function that takes an array of objects and a key, and returns a new array sorted based on the
// values of that key in ascending order.

const users = [
  { name: "Sam", age: 15, city: "Chennai", salary: 10500 },
  { name: "Ravi", age: 22, city: "Namakkal", salary: 12000 },
  { name: "Joes", age: 18, city: "Hosur", salary: 6000 },
  { name: "Aureen", age: 47, city: "Dharmapuri", salary: 10000 },
  { name: "aravind", age: 10, city: "Salem", salary: 8000 },
  { name: "Ram", age: 12, city: "Salem", salary: 10000 },
];

console.table(users);

const sortingArrayOfObjects = (user) => {
  user.sort((user1, user2) => {
    if (user1.name.toUpperCase() > user2.name.toUpperCase()) return 1;
    else if (user1.name.toUpperCase() < user2.name.toUpperCase()) return -1;
    else return 0;
  });
  return user;
};

console.table(sortingArrayOfObjects(users));

// Implement a deep clone function in JavaScript that creates a copy of a nested object or array
// without any reference to the original.

function deepCopy(array) {
  // return [...array]
  // return [].concat(array)
  // return Array.from(array)
  return JSON.parse(JSON.stringify(array));
}

// Implement a function that takes two sorted arrays and merges them into a single sorted array
// without using any built-in sorting functions.

const no1 = [1, 4, 6];
const no2 = [2, 3, 5];
const word1 = ["Apple", "Mango", "Peach"];
const word2 = ["banana", "cherry", "grape"];
const sortingTwosortedArray = (array1, array2) => {
  if (typeof array1[0] == "number" && typeof array2[0] == "number")
    console.log(twoArraySorting(array1, array2));
  else if (typeof array1[0] == "string" && typeof array2[0] == "string")
    console.log(twoArraySorting(array1, array2));
  else console.log("give two arrays in sae data type");
};

function twoArraySorting(array1, array2) {
  console.log("called");
  let sortedArray = [],
    j = 0,
    i = 0;
  if (typeof array1[0] == "string") {
    while (i < array1.length && j < array2.length) {
      if (array1[i].toUpperCase() < array2[j].toUpperCase()) {
        sortedArray.push(array1[i++]);
      } else {
        sortedArray.push(array2[j++]);
      }
    }
  } else {
    while (i < array1.length && j < array2.length) {
      if (array1[i] < array2[j]) {
        sortedArray.push(array1[i++]);
      } else {
        sortedArray.push(array2[j++]);
      }
    }
  }
  while (j < array2.length) {
    sortedArray.push(array2[j++]);
  }
  while (i < array1.length) {
    sortedArray.push(array1[i++]);
  }
  return sortedArray;
}

sortingTwosortedArray(no1, no2);
sortingTwosortedArray(word1, word2);

// Write a function that checks if a given string is a palindrome, considering only alphanumeric
// characters and ignoring case.

const wordss = "A man, a plan, a canal: Panama";

const isPalindromess = (str) => {
  if (str === str.split("").reverse().join(""))
    console.log("palindrome : ", str);
};

const palindromess = (str) => {
  str = typeof str == "string" ? str : String(str);
  str = makingAlphaNumeric(str);
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      isPalindrome(
        str
          .split("")
          .slice(i, j + 1)
          .join("")
      );
    }
  }
};

function makingAlphaNumeric(str) {
  const pattern = /[a-zA-z0-9]+/gi;
  return str.match(pattern).join("");
}

palindromess(wordss);



// Write a function that determines if two strings are anagrams of each other

const isAnagram = (str1, str2) => {
  const array = str1.split("");
  if (str1.length != str2.length) return false;
  for (let index = 0; index < str2.length; index++) {
    if (!array.includes(str2.charAt(index))) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram("listen", "sialnt"));
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("listen", "slent"));

// Create a JavaScript function that returns the Fibonacci sequence up to a given number, utilizing
// memoization for optimized performance.

const fibonacciSeries = (n) => {
  let a = -1,
    b = 1,
    c = 0;
  let array = [];
  while (c <= n) {
    c = a + b;
    if (c > n) return array;
    array.push(c);
    a = b;
    b = c;
  }
};
console.log(fibonacciSeries(10) ); 

*/

//---------------------------------------------

// Js own pracice 03

/*

// Write a function that takes an array of integers as input and returns a new array with only the unique elements.

const uniqueArray = (array) => {
  return [...new Set(array)];
};

console.log(
  uniqueArray([1, 2, 2, 3, 3, 4, 5, 6, 3, 6, 8, 123, 53, 23, 23, 35, 7, 133443])
);

//  Given a string, write a function to count the occurrences of each character in the string.

const frequencyFinder = (str) => {
  str = Array.isArray(str) ? str : str.toLowerCase().trim().split("");
  const output = str.reduce((acc, value) => {
    if (value in acc) acc[value]++;
    else acc[value] = 1;
    return acc;
  }, {});
  return output;
};

console.log(
  frequencyFinder([
    1, 2, 2, 3, 3, 4, 5, 6, 3, 6, 8, 123, 53, 23, 23, 35, 7, 133443,
  ])
);
console.log(frequencyFinder("Hello World"));

// write a program on this output eg for n = 6
// 1
// 2 4
// 3 5 7
// 6 8 10 12
// 9 11 13 15 17
// 14 16 18 20 22 24
// 19 21 23 25 27 29 31

// process.stdout.write("hello ");

const program1 = (n) => {
  let total = (n * (n + 1)) / 2;
  total = total % 2 == 0 ? total + 4 : total + 3;
  let odd = [];
  let even = [];
  for (let index = 1; index <= total; index++) {
    if (index % 2 == 0) {
      even.push(index);
    } else {
      odd.push(index);
    }
  }
  let count = 1,
    boolean = false;
  while (count <= n) {
    if (!boolean) console.log(odd.splice(0, count).join(" "));
    else console.log(even.splice(0, count).join(" "));
    boolean = !boolean;
    count++;
  }
};

program1(6);

// Write a function that takes an array of integers and returns the largest difference between any
// two numbers in the array.

const diffArray = [14, 7, 22, 3, 9, 18, 31, 5];

// method 1
const findingLargestDifference1 = (array) => {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      max = Math.max(
        max,
        array[i] - array[j] < 0
          ? Math.abs(array[i] - array[j])
          : array[i] - array[j]
      );
    }
  }
  return max;
};

// method 2
const findingLargestDifference2 = (array) => {
  return Math.max(...array) - Math.min(...array);
};

// method 3
const findingLargestDifference3 = (array) => {
  let max = Number.MIN_VALUE,
    min = Number.MAX_VALUE;
  for (let index = 0; index < array.length; index++) {
    if (max < array[index]) max = array[index];
    if (min > array[index]) min = array[index];
  }
  return max - min;
};

console.log(findingLargestDifference1(diffArray));
console.log(findingLargestDifference2(diffArray));
console.log(findingLargestDifference3(diffArray));

// Write a function that generates a random alphanumeric string of a given length . must have atleat 2 number and 2 letters.

const alphanumericGenerator = (n) => {
  let final;
  const alphaNumericArray =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
  function random() {
    return Math.trunc(Math.random() * 62);
  }
  function matchingWords() {
    let arr = [];
    for (let index = 0; index < n; index++) {
      arr.push(random());
    }
    generating(arr);
  }
  matchingWords();

  function patternChecking(str) {
    const pattern1 = /^[a-zA-z0-9]+$/;
    const pattern2 = /\d.*\d/;
    const pattern3 = /[a-zA-z].*[a-zA-Z]/;
    return pattern1.test(str) && pattern2.test(str) && pattern3.test(str);
  }

  function generating(arr) {
    let word = "";
    for (i = 0; i < arr.length; i++) {
      word += alphaNumericArray[arr[i]];
    }
    if (patternChecking(word)) {
      final = word;
    } else {
      matchingWords();
    }
  }
  return final;
};

console.log(alphanumericGenerator(6));

// Implement a function that converts a number to its Roman numeral representation.

const roman = {
  1: "i",
  2: "ii",
  3: "iii",
  4: "iv",
  5: "v",
  6: "vi",
  7: "vii",
  8: "viii",
  9: "ix",
  10: "x",
  40: "xl",
  50: "l",
  90: "xc",
  100: "c",
  400: "cd",
  500: "d",
  900: "cm",
  1000: "m",
};

const noToRoman = (n) => {
  if (n <= 10) {
    return roman[n].toUpperCase();
  } else if (n == 1000) {
    return roman[n].toUpperCase();
  } else if (n > 1000) {
    return "give no less than 1000";
  }
  let result = romanFInding(n);
  return result.toUpperCase();
};

function romanFInding(n) {
  console.log("function called");

  let str = "",
    no = n;
  if (n < 50) {
    lessthan10();
  } else if (n < 100) {
    lessthan50();
  } else if (n < 500) {
    lessthan100();
  } else if (n < 1000) {
    lessthan500();
  }

  function lessthan() {
    str += roman[no];
  }

  function lessthan10() {
    if (no < 10) {
      lessthan();
      return;
    } else if (no >= 40) {
      lessthan50();
      return;
    } else {
      let remain = Math.trunc(no / 10);
      for (let i = 0; i < remain; i++) {
        str += roman[10];
      }
    }
    no %= 10;
    if (no > 0) lessthan();
  }

  function lessthan50() {
    if (no >= 40 && no < 50) {
      str += roman[40];
      no %= 40;
      lessthan10();
      return;
    } else if (no < 40) {
      lessthan10();
    } else if (no >= 90) {
      lessthan100();
      return;
    } else {
      let remain = Math.trunc(no / 50);
      for (let i = 0; i < remain; i++) {
        str += roman[50];
      }
    }
    no %= 50;
    if (no > 10) lessthan10();
  }

  function lessthan100() {
    if (no >= 90 && no < 100) {
      str += roman[90];
      no %= 90;
      lessthan50();
      return;
    } else if (no < 90) {
      lessthan50();
      return;
    } else if (no >= 400) {
      lessthan500();
      return;
    } else {
      let remain = Math.trunc(no / 100);
      for (let i = 0; i < remain; i++) {
        str += roman[100];
      }
    }
    no %= 100;
    if (no >= 40) lessthan50();
  }

  function lessthan500() {
    if (no >= 900 && no < 1000) {
      str += roman[900];
      no %= 900;
      lessthan100();
    }
   else if (no >= 400 && no < 500) {
      str += roman[400];
      no %= 400;
      lessthan100();
      return;
    } else if (no < 500) {
      lessthan100();
      return;
    } else {
      let remain = Math.trunc(no / 500);
      for (let i = 0; i < remain; i++) {
        str += roman[500];
      }
    }
    no %= 500;
    if (no >= 90) lessthan100();
  }

  return str;
}

console.log(noToRoman(149));
console.log(noToRoman(399));

*/

//---------------------------------------------

// Js own pracice 04

/*

// write a function in JavaScript to merge two objects without overwriting existing properties?

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 99, c: 3 };
const obj3 = { c: 45, d: 4 };

const addingObject = (object1,object2) =>{
  for(element in object2) {
    if(element in object1)
      continue
    else
      object1[element] = object2[element];
  };
  return object1 
}

console.log(addingObject(obj1,obj2));

// write a function in JavaScript to calculate the cumulative sum of an array?

const cumulativeSum = (array) => {
  let sum = 0;
  // array.forEach((element,index) => {
  //   sum+=element
  //   array[index] = sum
  // });
  // return array
  return array.map((element) => {
    sum += element;
    return sum;
  });
};

console.log(cumulativeSum([1, 2, 3, 4, 5]));

// write a function in JavaScript to split an array into chunks of a specified size?

const splitSpecifiedInArray = (array, no) => {
  let result = [];
  while (array.length > no - 1) {
    result.push(array.splice(0, no));
  }
  result.push(array.splice(0));
  return result;
};

console.log(splitSpecifiedInArray([1, 2, 3, 4, 5, 6, 7], 3));


*/






