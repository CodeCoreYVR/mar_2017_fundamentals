const isEven = function (x) { return x % 2 === 0; };

const filter = function(array, fn) {
  let resultArray = [];
  for(let element of array) {
    if(fn(element)) {
      resultArray.push(element);
    }
  }
  return resultArray;
}

filter([1, 2, 3, 4], isEven);

const isOdd = function (x) { return x % 2 !== 0; };

filter([1, 2, 3, 4], isOdd);
