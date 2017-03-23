// Change "stop" to have the following output:
// "Screeeeetch!!" if speed is "fast" (speed attribute more than 120)
// "RRrch."                if speed is "medium"  (speed attribute more than 80)
// "sh"                       if speed is "slow"
// "Yikes, I don't know how fast I'm going!!!" if speed is anything else.
//
// Stretch:  If the speed is a number, output "Screetch!!" with that number of "e"s.
//
//
const car = {
  speed: 200,
  stop() {
    if (this.speed > 120) {
      console.log(`Scr${ "e".repeat(this.speed) }tch!`);
    } else if (this.speed > 80) {
      console.log("RRchh");
    } else if (this.speed > 0) {
      console.log("Shh");
    } else {
      console.log("I don't know how fast I'm going!!!");
    }
  }
};

car.stop();




// not a run time error or compile, logic error -> did not meet expectations
const car = {
  speed: 200,
  stop() {
    if (this.speed > 0) {
      console.log(`Scr${ "e".repeat(this.speed) }tch!`);
    } else if (this.speed > 80) {
      console.log("RRchh");
    } else if (this.speed > 120) {
      console.log("Shh");
    } else {
      console.log("I don't know how fast I'm going!!!");
    }
  }
};

car.stop();


// //
