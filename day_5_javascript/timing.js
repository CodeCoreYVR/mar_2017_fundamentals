// let addOne = function(number){
//   return number + 1;
// };
// let call = function(addOne, number) {
//   return addOne(number);
// };
//
// console.log( addOne(6) ); // 7
// console.log( call(addOne, 10) ); // 11
// console.log( call(function(num){return num+1;}, 20) ); // ???
// //
// let six = 6;
// addOne(six);
//
// addOne(6);
// let squareIt = function(number) {
//   return number * number;
// };
//
// call(squareIt, 5); // 25
//
// call(function(number) { return number * number }, 5);


// timing - higher order function
// setTimeout(function, delay);
let sayHello = function(){
  console.log("Hello!");
}
// 1000ms = 1 second
setTimeout(sayHello, 5000);

// sayHello is the callback function in my setTimeout method
setTimeout(function(){
  console.log("Goodbye");
}, 10000);



// Exercise

console.log("Loading...");
setTimeout(function(){
  console.log("Hello World!");
}, 3000);


setTimeout(function(){
  console.log("Ready");
}, 1000);

setTimeout(function(){
  console.log("Set");
}, 2000);

setTimeout(function(){
  console.log("Go");
}, 3000);


// setTimeout - will run once after x number of ms
// setInterval - will run every x number of ms
let counter = 0;
let intervalId = setInterval(function(){
  console.log("Hello");
  counter++;

  if (counter == 10) {
    clearInterval(intervalId);
  }
}, 1000);


// exercise - blast off

let counter = 10;
let intervalId = setInterval(function(){
  if (counter > 0) {
    console.log(counter);
  } else {
    console.log("Blast Off!");
    clearInterval(intervalId);
  }
  counter--;
}, 1000);









//
