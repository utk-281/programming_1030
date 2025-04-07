//! truthy and falsy ==> boolean equivalent of truthy values are 1 and falsy are 0

//? falsy ==> 0, "", null, undefined, NaN, false, -0
//? truthy ==> other than this all are truthy values

//? ternary operator ==> condition ? "statement 1": "statement 2"
// statement 1 will execute when the condition is true
// statement 2 will execute when the condition is false

//! check wether a year is leap year or not?
//? ==> 3 conditions:
//  divisible by 4 --> ,not divisible by 100 --> leap year
//  divisible by 400 --> leap year

function checkLeapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return "Leap Year";
  } else if (year % 400 === 0) {
    return "Leap Year";
  } else {
    return "Not a leap year";
  }
}
// console.log(checkLeapYear(2024));
// console.log(checkLeapYear(1600));
// console.log(checkLeapYear(1000));
// console.log(checkLeapYear(1200));

console.log("b" + "a"); // ba
console.log("b" + 1); // b1
console.log("b" - 1); // NaN
console.log(1 + "b"); // b1
console.log(1 + "b"); // 1b
console.log("a" + "b" + 1 + 2); // ab12
console.log(1 + 2 + "a" + "b" + 1 + 2); // 3ab12
console.log(1 + 2 + "a" + "b" + 1 + 2); // 3ab12
console.log(1 + "2"); // 12
console.log(1 - "2"); // -1
console.log(2 + 1 + "2"); // 32
console.log("2" + 1 + "2"); // 212

console.log([] + []); // ""
console.log([] + {}); // Object

//? isNaN(Number) ==> true/ false

console.log("b" + "a" + +"a" + "a"); // baNaNa
// console.log("ba" + +"c");

// ==, === (return type --> boolean
// < , > ,<=, >= --> return type boolean
console.log(10 == 10);
console.log(10 == 20);

console.log(1 < 2 < 3); // true
console.log(1 > 2 > 3); // false

//! write a function to take three numbers as input and display the biggest number
let prompt = require("prompt-sync")();

// let num1 = prompt("enter number 1 : ");
// let num2 = prompt("enter number 2 : ");
// let num3 = prompt("enter number 3 : ");

function findLargestNum(num1, num2, num3) {
  // 1, 2, 3
  let largest = num1; // largest = 1
  if (num2 > largest) {
    if (num2 > num3) {
      console.log(num2);
    } else {
      console.log(num3);
    }
  } else {
  }
}

//! you are given with a string (lowercase), convert the first letter of every word to capital letter
// "today is thursday"
// "Today is Thursday"
//? ==> toUpperCase()
// let result = ""
// if (i==0, i-1==" ", i=="a to z") --> toUpperCase() ; result+=str[i].tUC
// else
// result+=str[i]

function capitalizeFirstLetter(str) {
  if (str.length === 0) return "Please enter a string";

  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (i == 0 && str[i] !== " ") {
      result += str[i].toUpperCase();
    } else if (str[i - 1] === " " && str[i] >= "a" && str[i] <= "z") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

console.log(capitalizeFirstLetter("today is thursday"));
console.log(capitalizeFirstLetter("   today is   thursday  "));

// 14: 00 ==> 2 : 00 PM
//! 01:30 PM ==> 13: 30
//! 12:30 AM ==> 00 : 30
//! 12:30 PM ==> 12 : 30
