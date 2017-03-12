// arrays - data structure

// lists
// shopping list
// packing list
// to do list

// name convention - camelCase
// let shoppingList = new Array(); // construct an array object
// let toDoList = []; // array initializer
// shoppingList.push("cheese");
// shoppingList.push("toilet paper");
// shoppingList.push("cucumbers");
// shoppingList.push("beer");
//
// console.log(shoppingList);
//
// let packingList = ["underwear", "socks", "toothbrush"];
//
// console.log(packingList); //["underwear", "socks", "toothbrush"]
// // push // add an item to the end of your list
// packingList.pop(); // removes an item from the end of your list
//
// console.log(packingList); //["underwear", "socks"]
//
// // Google search: MDN Array
// // push, pop, shift, unshift, slice...
//
// console.log(shoppingList.length);
// console.log(packingList.length); // 2
//
// // in javascript, arrays values can be mixed type
//             // addresses
//             //  0, 1, 2,  3,        4,    5,     6
// let mixedBag = [1, 2, 3, "Jacob", "Ben", true, false];
// // in javascript, array are dynamically sized
//
// // how to access a single element in the array
// mixedBag[0]; // 1
// mixedBag[0] = 5; // 5
// //
// // // what happens if we do a mathematically operation on two different
// // // data types
// // mixedBag[0] + mixedBag[3] // number * string
// // mixedBag[4] - mixedBag[2] // string * number
// // mixedBag[5] * mixedBag[1] // boolean * number
// //
//
// // array exercise
// let simple = "Jacob";
// let complicated = ["Jacob", "Ben"];
//
// // let first = new Array();
// // first.push("hello");
// // first.push(5);
// // first.push('a');
//
// let first = ["hello", 5, 'a'];
//
// // our indexes or address start from zero
// first[1] = 6;
//
// // let second = [0,1,2,3,4,5,6,7,8,9....]
// let second = [];
// // let second = new Array();
// // second.push(0);
// // second.push(1);
// // second.push(2);
// // // second.push(3);....
// for (let i=0; i<=100; i++) {
//   second.push(i);
// }
//
// // quickly create ranges in javascript
// console.log(second.length);  // 101
//
// // iterate, or loop over my array
// let letters = ['a', 'b', 'c', 'd'];
//
// for (let letter of letters) {
//   console.log(letter);
// }
//
// for (let i=0; i<letters.length; i++) {
//   // 0,1,2,3
//   console.log(letters[i]);
// }
//
// // for..of - used for array
// // for..in - used for objects
//
// // array iteration exercises
// let numbers = [0, 5, 6, -12];
// let result = 0;
// for (let number of numbers) {
//   result = result + number;
//   // result += number;
// }
//
// console.log(result); // -1
//
// // words
// let words = ["apple", "dog", "computer", "cup"];
// for (let word of words) {
//   console.log(`${word} has ${word.length} characters.`);
// }
//
// // strings are an array of characters
// let name = "Jacob";
// name[0]; // "J"
// name[4]; // "b"
// name[1] = "@"; // does not change to "J@cob", it fails silently
//
// // split - is a string method
// let characters = name.split(""); // turn a string into an array of characters
// // ['J', 'a', 'c', 'o', 'b']
//
// // join - is an array method
// name = characters.join(""); // turn an array into a string
//
// let greeting = "hello";
// // turn greeting into an array of characters
// // ['h', 'e', 'l', 'l', 'o']
// console.log(greeting.split(""));
//
// let characters = greeting.split("");
// console.log(characters);

// exercise part2
let sentence = prompt("Please enter a sentence: ");

// "Another brick in the wall"
// let name = "Jacob";
// let characters = name.split("");
//
// let sentence = "Another brick in the wall";

let words = sentence.split(" ");
// ["Another", "brick", "in", "the", "wall"]
console.log(words.length); // 5

// part 3
// let numbers = "012345678910111213141516......99"
let fifthArray = [];

for (let i=0; i<100; i++) {
  fifthArray.push(i);
}
// [0, 1, 2, 3, 4, 5 ... 99]

console.log(fifthArray.join(""));
// "012345678910......99"




































//
