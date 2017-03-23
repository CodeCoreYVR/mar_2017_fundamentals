// step 1, make a function that takes in a number and squares it
let squareIt = function(number) {
  return number * number;
  // return number ** 2;
};

squareIt(2); // 4
squareIt(6); // 36

// step 2, up the complexity
// make a higher order function that calls squareIt
let call = function(func) {
  func(2);
  func(6);
}

call(squareIt);

// step 3, make a higher order function that takes in 2 arguments
// the first being a function and the second being the value we want
// pass into that function argument.
let callV2 = function(func, number) {
  func(number);
}

callV2(squareIt, 6);

// step 4, pass in a third argument, that will execute the function
// a certain number of times
let callV3 = function(func, number, times){
  for (let i=0; i<times; i++) {
    func(number)
  }
};

// step 5, make things meaningful. keep a running total of our squares
// and return that result from our higher order function
let callV4 = function(func, number, times) {
  let total = 0;

  for (let i=0; i<times; i++) {
    total += func(number);
  }

  return total;
}

callV4(squareIt, 6, 4); //??? 256, 144










//
