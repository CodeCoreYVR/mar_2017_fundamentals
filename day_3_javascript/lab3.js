// Write a function that takes in a temperature in celsius and returns the temperature in Fahrenheit rounded to one decimal point.
//
// The formula to convert Celsius to Fahrenheit is: F = C * 9/5 + 32
//
// For example, if the input is 23 the function should return 73.4

// before
let currentTemp = 37;

function converter(celsius) {
  // F = C * 9/5 + 32
  let newTemp = celsius * (9 / 5) + 32;
  return newTemp.toFixed(1);
}

console.log(converter(37));
console.log(converter(23));
console.log(converter(0));


// after
// 73.4
