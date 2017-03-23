// array methods
// construction an instance of the array class
// creating an array object, storing it in the numbers variable
let numbers = new Array();
numbers.push(1);
numbers.pop();
numbers.slice();
numbers.shift();
numbers.unshift();

let mario = new Object();
let mario = {
  image: "mario.png",
  clothing: ["hat", "overalls", "gloves"],
  lives: 2,
  hitPoints: 1,
  jump: function() {
    console.log("Leap 20 metres");
  }
};

// function () {} <- anonymous function

console.log( mario.image );
console.log( mario.clothing );
mario.jump();

function sit() {
  console.log("Sit");
}

function rollOver() {
  console.log("Roll Over");
}

function shakePaw() {
  console.log("Shake a Paw");
}


let dog = {
  name: "Summer",
  breed: "Golden Doodle",
  age: 2,
  trick: sit
  // tricks: [sit, rollOver, shakePaw]
};

dog.sit();
// dog.tricks[0]();

let clean = function() {
  console.log("clean");
};

let cat = {
  name: "Tom",
  groom: clean
};

cat.groom();

// make a car object
// add properties to it
// add a park and stop method to it
// let car = {};
// function parking(){
//   console.log("parking...");
// }
// function stopping(){
//   console.log("stopping...");
// }

// -- NEW SECTION --
let parking = function(){
  console.log("parking...");
}
let stopping = function(){
  console.log("stopping...");
}

const car = {
  make: "Tesla",
  model: "Model 3",
  capacity: 5,
  // method 1 - assigning an anonymous function
  // park: function() {
  //   console.log("parking...");
  // },
  // stop: function() {
  //   console.log("stopping...");
  // }
  // method 2 - pointing to functions
  park: parking,
  stop: stopping
};

console.log( car.make );
console.log( car.model );
console.log( car.capacity );

car.park();
car.stop();

// --- OR ---
const car = {
  make: "Honda",
  model: "Civic",
  capacity: 5,
  park() {
    console.log("parking..");
  },
  stop() {
    console.log("stopping");
  }
};

car.park();
car.stop();
//---
// this is creating a me object

const car = {
  speed: 200,
  drive() {
    //console.log(`I am driving at a speed of ${ car.speed } km/h`);
    console.log(`I am driving at a speed of ${ this.speed } km/h`);
  }
};

console.log( car.speed );
car.drive();











//
