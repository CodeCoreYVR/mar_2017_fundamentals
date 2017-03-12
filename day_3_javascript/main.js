// main.js
// anything that is developer related
console.log("Hello!");

// anything that we would like to
// show our user
document.write("<h1>Goodbye!</h1>");

// operating system command
// windows operating system
// will only have an okay button
window.alert("This is a pop up");
// will have an ok and cancel
window.confirm("Are you at CodeCore?");
// will let you type in a text field
// let name = "Jacob";
// window.prompt() will return a string of what
// the user entered into the text field
let name = window.prompt("What is your name?");
// the window object is optional to write out
// e.g. alert("Will also work");


// exercise
// when using let, you cannot redefine a variable
// with the same name

// var, the old way of defining variables
// you can redefine a variable with the same name

// Uncaught SyntaxError: Identifier 'name' has already been declared
let name2 = window.prompt("What is your name?");
// strings that are created with backticks ``
// enable us to use string interpolation
window.alert(`Hello, ${ name2 }!`);
// string concatenation
// window.alert("Hello, " + name2 + "!");

// // clearer
// window.alert(`A dozen is: ${ 6 + 6 }!`);
// // not so clear
// window.alert("A dozen is: " + 6 + 6);

// to quickly comment out a line or block of code:
// <cmd + />  or <ctrl + />
// it will also a line of code to be uncommented

// morning function that i run every day

// morning function
// wakeup
// brush teeth
// eat breakfast
// pack your bag
// catch the transit
// see jacob

// we repeat a set of instructions
// loops?












//
