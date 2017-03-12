// objects

// separated by property : property value
// const me = {
//   name: "Jacob",
//   age: 38,
//   birthPlace: "Hanoi",
//   hobbies: ["BJJ", "Rock Climbing", "Cars"]
// };
//
// const beyonce = {
//   name: "Beyonce",
//   fetus: {
//     name: "Peanut",
//     age: -1
//   }
// }
//
//
// // dot operator to access the properties of an object
// console.log(me.name);
// console.log(me.age);
// console.log(me.birthPlace);

// creating an array object
// let hobbies = new Array();
// hobbies = ["BJJ", "Rock Climbing", "Cars"];

// build a car object
// const car = new Object();
//
// // const car = {
// //   manufacturer: "Tesla",
// //   model: "Model 3",
// //   year: 2018
// // };
//
// car.manufacturer = "Tesla";
// car.model = "Model 3";
// car.year = 2018;
// car.capacity = 5;
//
// console.log(`I want a ${car.year} ${car.manufacturer} ${car.model}`);
// console.log(`I want a ${car.year} ${car.manufacturer} ${car.model} that seats ${car.capacity}`);
//
// // exercises
// const me = {
//   name: "Jacob",
//   age: 38,
//   occupation: "Dad",
//   "hair color": "black"
// };
//
// me.occupation = "JavaScript Expert";
// me.skill = ['ruby', 'rails', 'javascript'];
//
// me["hair colour"] = "black"; // set
// me["hair colour"] // get
// me[0]
//
//
// const obj = {
//   a: 5,
//   b: 6
// };
//
// obj["a"];
// obj.a;
//
//
//
//
// // function object exercise
// const user = {
//   name: "Jacob",
//   age: 38
// };
//
// const tam = {
//   name: "Tam",
//   age: 28
// };
//
// const ben = {
//   name: "Ben",
//   age: 20
// };
//
// function about(user) {
//   console.log(`${user.name} is ${user.age} years old.`);
// }
//
// function about2(user) {
//   return `${user.name} is ${user.age} years old.`;
// }
//
// about(user);
// about(tam);
// about(ben);
//
// console.log(about2(user));
// document.write(about2(user));
// window.alert(about2(user));
//
// // an array of words
// let words = "all you need is love love is all you need".split(" ");
// // const beatles = {};
// const beatles = new Object();
//
// for (let word of words) {
//   // if this is the first time the word has occurred, then we need to initialize
//   // it to one
//   if (beatles[word] == undefined) {
//     beatles[word] = 0;
//   }
//
//   // undefined + 1 -> NaN
//   beatles[word] += 1;
//   console.log(beatles);
// }

// const prince = {
//   name: "Prince"
// };
//
// prince.name = "Symbol";
// prince.name = "Prince";


// before
// 1. split the string, creating an array of words
function wordLengths(sentence) {
  let words = sentence.split(" ");

  // 2. iterate over our words array and set the individual words to be properties
  // of an object.
  const obj = new Object();

  ["nothing", "gold", "can", "stay"]
  //
  for (let word of words) {
    //
    obj[word] = word.length;
    // obj["nothing"] = 7;
  }

  return obj;
}

wordLengths("nothing gold can stay");
wordLengths("to be or not to be");
wordLengths("it was the best of times it was the worst of times");


// after
{
  "nothing": 7,
  "gold": 4,
  "can": 3,
  "stay": 4
}


let people = [{name: "Jacob"}, {name: "Tam"}, {name: "Steve"}];

for (let person in people) {
  // person.name
  // person["name"]

  for (let prop of person) {
    console.log(`The property ${prop} has the value ${person[prop]}`); // Jacob
  }
}


people = ["Jacob", "Tam", "Steve"]

person = {
  name: "Jacob",
  age: 38
}

person.hairColor = "black";

//


// all occurs 3 times
// you occurs 2 times
// need occurs 2 times
// is occurs 1 time
// love occurs 2 time













//
