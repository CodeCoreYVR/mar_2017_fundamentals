// functions
// by convention we do not need
// to put a semi-colon at the end
// of a declarative function
// function morning() {
//   console.log("-----morning start----------");
//   console.log("wake up");
//   console.log("brush teeth");
//   console.log("eat breakfast");
//   console.log("get changed");
//   console.log("code");
//   console.log("------morning end-----------");
// }
//
// // this is how we call a function
// morning();
// morning();
// morning();
// alert("It's the weekend.. let's chill.");
// morning();
// morning();
// morning();
// morning();
// alert("It's Spring Break, what am I doing here");

// function expression - assigning a function to a variable
const PI = 3.14159;
const suffering = true; // life is suffering
// function() {} anonymous function - function that has no name
// const evening = function() { console.log("the night time is the right time") };
const evening = function() {
  console.log("the night time is the right time");
  console.log("the night time is the right time");
  console.log("the night time is the right time");
  console.log("the night time is the right time");
  console.log("the night time is the right time");
};

evening();


// let value1 = 5;
// let value2 = 6;
//
// value1 + value2;

function add(number1, number2) {
  return number1 + number2;
}

add(); // we are expecting you to pass in 2 arguments and you gave me none

consolelog(add(5, 6)); // 11
alert(add(7, 8)); // 15

let result = add(7, 8); // 15


// make a subtract function that takes in 2 arguments, but try
// using a function expression, e.g. setting an anonymous function
// to a variable

// prompt will return a string
// '2' == 2
// parseInt converts a string to a number (integer)
let number1 = parseInt(prompt("What is your first number"));
let number2 = parseInt(prompt("What is your second number"));

const subtract = function(number1, number2) {
  return number1 - number2;
};

console.log(subtract(parseInt(number1), parseInt(number2)));

// if we wanted prompt the user for 2 numbers we wanted to subtract
// what order do we do it in?

// 2. make the functions
// 1. prompt for the numbers, storing them in variables
// 3. call the functions

document.write(subtract(10, 5)); // 5
console.log(subtract(20, 6)); // 14

// // can we prompt the user for 2 numbers
// let number1 = prompt("what is your first number: ");
// let number2 = prompt("what is your second number: ");
//
// // can those 2 numbers be entered in, on one line (e.g. "1,2")
// let numbers = prompt("Enter in 2 numbers, comma separated");
// numbers.split(",");
// numbers[0] <- first number
// numbers[1] <- second number

// recursion
// function sort() {
//   if (condition is met) {
//     // stop running recursively
//   }
//   else {
//     sort();
//   }
// }













//
