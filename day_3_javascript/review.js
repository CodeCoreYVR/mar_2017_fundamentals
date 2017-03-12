// good morning fundamentals!!!

// javascript - livescript
// mr. echt
// 10 days - netscape headquarters
// ECMAScript 6 - latest version of javascript
// babel compiler

// variables
// var <- older way of defining variables
//
// let <- new way of defining variables
// const <- constant - will not change
let name = "Jacob";
let age = 38;

let surName = "Tran"
let lastName = surName;

// logic gating
// or and
// ==, <, >=, <=, != (! == not), ===

// === three equals, will check the type of variable as well
if (2 == "2") {
  console.log("Yes it does");
}

// data type
// strings
// numbers
// boolean (true or false)
if (2 === "2") {
  // it would not come in here
  console.log("Yes it does");
}

if (age > 16) {
  console.log("You can drive");
} else {
    console.log("You are too young");
}

// if else
// switch case

// loops
// for
// while
// do .. while

// infinite loop
while (true) {
  console.log("hello");
}

let counter = 0;
while (counter < 10) {
  console.log("goodbye");
  // incrementing the counter
  counter++; // 10
  // counter = counter + 1;
  // counter += 1;
}

counter = 0;

// break;
while (counter < 10) {
  console.log("goodbye");
  counter++;

  if (counter == 5) {
    break; // exit out of my loop, regardless of what is in the while statement
  }
}

// when do you use a for and when do you use a while
for (let i=0; i<10; i++) {
  console.log("goodbye");
}

// today's lesson
let numbers = [1,2,3,4,5];
// increment ++
for (let number in numbers) {
  console.log(numbers[number]);
}



















//
