// good evening fundamentals!

// function - resuable, modular, list of instructions
// that we can call over and over and over again

// declaritive function
function morning() {
  console.log("wake up");
  console.log("eat breakfast");
  console.log("transit");
  console.log("code");
}

morning();
morning();
morning();
morning();
morning();

function add(x, y) {
  return x + y;
}

console.log( add(5, 6) ); // 11
// document.write( add(5, 6) ); // 11
// window.alert( add(5, 6) ); // 11

// function expression
let multiply = function(x, y) {
  return x * y;
};

console.log( multiply(2, 7) ); // 14


// data structures
// arrays
let name = "Jacob";
let fullName = "Jacob Tran";

let fullName = new Array();
let fullName = ["Jacob", "Tran"];

// 0: "Jacob"
// 1: "Tran"

fullName[0]; // "Jacob"
fullName[1]; // "Tran"

// shopping lists
// packing lists
// to do lists

fullName.push("Dam");
// ["Jacob", "Tran", "Dam"]
fullName.pop();
// ["Jacob", "Tran"]

// shift, unshift, splice, sort
// MDN Array

// [[], [], []] // multi-dimensional array

// 2 dimensional array - 2 pieces of information to access my data
// row, columns - 2 dimensionals arrays

// spreadsheets
// bingo game
// tictactoe
// battleship
// calendar

let row1 = [null, null, null];
let row2 = [null, null, null];
let row3 = [null, null, null];

let tictactoe = [
  row1,
  row2,
  row3
];


let tictactoe = [
    // 0     1     2
  [null, null, null], // 0
  [null, "X", null],   // 1
  [null, null, null]   // 2
];

let tictactoe = [ [null,null,null], [null,"X",null], [null,null,null] ],
tictactoe[1][1] = "X";
// tictac[row][col]

let numbers = [1,2,3,4,5];

for (let number of numbers) {
  console.log(number);
}

for (let i=0; i<numbers.length; i++) {
  console.log(numbers[i]);
}


let middleRow = 1;
let middleColumn = 1;
tictactoe[middleRow][middleColumn] = "X";
// tictactoe["middle"] <-- throws an error

// objects - surround us every day
// we describe objects in our world, but describing their properties
let me = {};
let me = new Object();

let me = {
  name: "Jacob",
  weight: 140
};

me.height = "5'6\"";

me.name; // "Jacob"
me.age; // undefined
me.age = 38;

// {
//   name: "Jacob",
//   weight: 140,
//   height: "5'6\"",
//   age: 38
// }

me.hobbies = ["Skiing", "Piano", "Teaching"];
me.baby = {
  name: "Junior",
  age: 1
};

// dot operator to access properties in my object
me.baby.age; // 1
me.hobbies[1]; // "Piano"

// me.hair color
me["hair color"] = "black"

// {
//   property: value
//   name: "Jacob",
//   weight: 140,
//   height: "5'6\"",
//   age: 38,
//   hair color: "black"
// }

let property = "hair color";
me[property] = "black";

let jane = {};
jane[property] = "blonde";

let color = "pink";
let newProperty = "favourite color";
me[newProperty] = color;

// // const for objects
// const me = {};

// for .. of -> arrays
// for .. in -> objects
// step through my object printing out all the properties
for (let property in me) {
  console.log(property);
  console.log(me[property])
}

// input
"catch me if you can"

// catch -> there are 5 characters in the word catch
// me
// if
// you
// can

// ["catch", "me", "if", "you", "can"]
// turn a string into an array using the split method

// 1. split the sentence into a list of words
// 2. count how many words we have, we have 5 words
// 3. how many characters are in each word?
// 4. make an object with properties named:  "catch", "me", "if", "you", "can"
// 5. give each one of those properties a numerical value

let words = "catch me if you can".split(" "); // this turns a sentence into an array of words
// words.length // this will give me how many items are in my list
"catch".length; // this will give me how many characters are in a string

result = {};
// result["catch"] = "catch".length;
//
// let newProperty = "me";
// result[newProperty] = newProperty.length;
// let newProperty2 = "if";
// result[newProperty2] = newPropert2.length;
// let newProperty3 = "you";
// result[newProperty3] = newPropert3.length;
// let newProperty4 = "can";
// result[newProperty4] = newPropert4.length;

// stepping through the array of words
for (let word of words) {
  result[word] = word.length;
}


function wordLengths(sentence) {
  let obj = {};
  let words = sentence.split(" ");

  for (let word of words) {
    obj[word] = word.length;
  }

  return obj;
}

wordLengths("catch me if you can");
//
// {
//   "catch": 5,
//   "me": 2,
//   "if": 2,
//   "you": 3,
//   "can": 3
// }








//
