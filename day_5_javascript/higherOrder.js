// higher order functions
// a function that takes in functions as arguments
// and/or returns a function as it's return value
let sayHello = function(){
  console.log("Hello");
};

sayHello();

let runThree = function(){
  sayHello();
  sayHello();
  sayHello();
}
//
runThree();

// runThreeV2 is a higher order function because it takes in a
// function as an argument
let sayGoodbye = function(){
  console.log("Goodbye");
}

let runThreeV2 = function(func){
  func();
  func();
  func();
}

runThreeV2( sayHello );
runThreeV2( sayGoodbye );

// write a function that will double any number we give it
let doubleIt = function(number) {
  return 2 * number;
};

doubleIt(5); // 10
doubleIt(15); // 30
doubleIt(50); // 100

// higher order function is going to call doubleIt 3 times
let call = function(func){
  func(5);
  func(15);
  func(50);
};

call(doubleIt);

// --- //
//                    doubleIt, 5
let callV2 = function(func, num) {
  // doubleIt(5);
  func(num);
}

callV2(doubleIt, 5);


// -- //
let callV3 = function(func, num, times) {
  let total = 0;
  // doubleIt(5);
  for (let i=0; i<times; i++) {
    total += func(num);
  }

  return total;
}

console.log( callV3(doubleIt, 20, 6) );




//
