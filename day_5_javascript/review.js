// good morning fundamentals!
// 3 ways we can define variables in javascript
let name = "Jacob";
var student = "Jill";
const PI = 3.14;

// data structures - arrays
// indexed list of information
// one dimensional array - we need 1 piece of information to
// access the data
let names = ["Jacob", "Jill"];
// 0: "Jacob"
// 1: "Jill"

names[0]; // "Jacob"
names[1]; // "Jill"

let lyric = "Let it be";
// array of characters
lyric[0]; // "L"
lyric[8]; // "e"

let numbers = [];
// I am creating a variable named numbers
// I am assigning numbers the value of an array object
// which is an instance of the array class
let numbers = new Array();

// Objects
let me = {};
let me = new Object();
// properties are one way to describe the objects around us

let puppy = {
  // property: value
  name: "Summer",
  breed: "Golden Doodle",
  weight: 15,
  age: 2
};

// puppy.trick = "Sit";
// puppy.baby = {};
puppy.tricks = ["Sit", "Shake Paw", "Roll Over"];


// functions
// 2 ways to declare functions in javascript
// declaritive function
// puts the morning function the global name space
function morning() {
  console.log("wake up");
  console.log("brush teeth");
  console.log("transit");
  console.log("code");
}

morning();
morning();
morning();

// function expression
let evening = function(){
  console.log("Eat dinner");
  console.log("Study");
  console.log("Sleep");
};

// let numbers = new Array();

evening();
evening();
evening();

// write a function that takes in a number,
// but always return zero
function zero(number) {
  return 0;
}

let zero = function(number) {
  return 0;
}

function multiply(x, y) {
  // return x * y;
  let result = x * y;
  return result;
}

let multiply = function(number){
  // return x * y;
  let result = x * y;
  return result;
};

multiply(5, 6); // 30
console.log( multiply(5, 6) ); // 30
document.write( multiply(5, 6) ); // 30
window.alert( multiply(5, 6) ); // 30


// loops
// for
// while
// counting from 1 to 10
for (let i=1; i<=10; i++) {
  console.log(i);
}

let counter = 1;
while (counter <= 10) {
  console.log(counter);
  counter++;
}

// for .. of <- loop through arrays
// for .. in <- loop through objects

let numbers = [1,2,3,4,5];

for (let number of numbers) {
  console.log(number);
}

for (let i=0; i<numbers.length; i++) {
  console.log( numbers[i] );
}

let tictactoe = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
];

for (let row of tictactoe) {
  console.log(row); // [null, null, null]

  for (let col of row) {
    console.log(col);
  }
}

let jacob = {
  specimen: "sapien"
}
let summer = {
  specimen: "domesticus"
}
let things = [ jacob, summer ];

for (let thing of things) {
  for (let property in thing) {
    console.log(`The ${property} is ${thing[property]}`);
  }
}











//
