// get and set are accessors
// also called getters and setters
const counter = {
  count: 0,
  step: 1,

  set(n) { this.count = n },
  setStep(n) { this.step = n }
  // get() { return this.count },
  increment() { return this.count+= this.step },
  decrement() { return this.count-= this.step }
};

// I want to set count to 100, not 10
// test the counter object
// counter.count = 100;
console.log(counter.count);
counter.set(100);
console.log(counter.get());
console.log( counter.increment() );
console.log( counter.increment() );
console.log( counter.increment() );
console.log( counter.increment() );
let newValue = counter.increment();
console.log(counter.get());

// let numbers = [1,2,3,4];
// let whatWasPopped = [];
// whatWasPopped = numbers.pop();
// whatWasPopped = whatWasPopped.push(numbers.pop());

// make an incrementor - this will increase count by 1
// make a decrementor - this will decrease count by 1
// make a resetter - this will bring count back to it's initial value




//
