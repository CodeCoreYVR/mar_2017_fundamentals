// eugene

let side1 = parseInt(prompt("enter the length of side 1"));
let side2 = parseInt(prompt("enter the length of side 2"));
let side3 = parseInt(prompt("enter thelength of side 3"));

let p = (side1 + side2 +side3)/2;
let area = Math.sqrt(p*(p-side1)*(p-side2)*(p-side3));
console.log(`The area of the triangle is ${area}`);
document.write(`The area of the triangle is ${area}`);
