// // Assignment: [lab] Popular name Edit Next Module
//
// Given an object that looks like:
//
let names = { mike: 2, john: 3, jen: 5, eli: 1}
// Write a function that takes an object above and returns a string noting the most popular name. It should return a string that looks like the most popular name is jen
// hindreen
function popName( names ) {
  let temp = -1;
  let string = "";

  for (let name in names) {
    if(names[name] > temp) {
      temp = names[name];
      string = name;
    }
  }

  return string;
}
document.write(`The most popular name is ${ popName(names) }`);
