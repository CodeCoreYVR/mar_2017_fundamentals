// good evening fundamentals!

// methods - an object has properties.  if one of those
// properties has a value that is a function. it is called
// a method
function driving() {
  console.log("Driving...");
}

const car = {
  speed: 200,
  make: "Honda",
  model: "Civic",
  capacity: 5,
  parts: ["steering wheel", "seats", "sun roof"],
  engine: { numOfPistons: 8 },
  // drive: driving // <- version 1, setting a function's
  // name to the value of our drive property
  // drive: function() { console.log("Driving...") } // <- version 2
  drive() { console.log("Driving...") } // <- version 3
};

// Arrays
// let numbers = [];
// numbers.push();
// numbers.pop();
// numbers.shift();
car.speed; // 200
// car.drive; // function
car.drive(); // execute the function (or method)

// higher-order functions - a function takes in functions as an argument
// a function that returns a function
let addOne = function(number) {
  return number + 1;
}

console.log( addOne(100) ); // 101

let call = function(func) {
  return func(10);
};

console.log( call(addOne) ); // 11

let call2 = function(func, number) {
  return func(number);
};

console.log( call2(addOne, 10) );
console.log( call2(addOne, 20) );
console.log( call2(addOne, 12930) );

let squareIt = function(number) {
  return number * number;
};

call2(squareIt, 10); // 100
call2(squareIt, 20); // 400
call2(squareIt, 12930); // ??

// timing functions - callback function
let sayHello = function(){
  console.log("Howdy!");
};

sayHello();

// 4000ms == 4 seconds
// will only execute the function once after the delay period
setTimeout(sayHello, 4000);
setTimeout(function(){ console.log("Goodbye") }, 4000);

// this execute sayHello every 4 seconds repeatedly
// setInterval returns a unique id
let intervalId = setInterval(sayHello, 4000);

// we can stop this interval by doing what?
clearInterval(intervalId);

let counter = 0;

let intervalId2 = setInterval(function(){
  console.log("Goodbye");
  counter++;

  if (counter > 3) {
    clearInterval(intervalId2);
  }

}, 1000);

// create 2 people objects
const jack = {
  name: "Jack",
  age: 10
};
const jill = {
  name: "Jill",
  age: 9
};

// people class
// we are creating an instance of the Array class
let numbers = new Array();

// a function with a name that starts with a capital letter is a class
function Person(name, age){
  this.name = name;
  this.age = age;
  // this.hairColour = hairColour;
}

// jack is an object
let jack = new Person("Jack", 10);
// jill is an object
let jill = new Person("Jill", 9);

// array of people
let people = [jack, jill];

for (let person of people) {
  console.log(`${person.name} is ${person.age} years old.`);
}


jack.hairColour = "brown";



//
