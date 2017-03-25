// alert("Is this hooked up?");
// let elements = document.getElementsByTagName("h1");

// hungarian notation
// aElements
// iAge
// sName

// 1995?
// window.onload = function() {
//   let first = document.getElementById("first").innerHTML = "Window Has Loaded!!!";
// }

// 1997?
// document.addEventListener("DOMContentLoaded", function(){
//   let first = document.getElementById("first");
//   first.innerHTML = "The document is ready...";
// });

// $ <- Selector
// $() <- jQuery
// $(document).ready(function(){
//   let first = document.getElementById("first");
//   first.innerHTML = "The document is ready according to jQuery...";
// });

$(function(){
  // let first = document.getElementById("first");
  let first = $("#first");
  first.innerHTML = "This is shortest way to check if the document is ready...";
});

// selector - css
// <style>
//   first {
//
//   }
//   h1 {
//     color: pink;
//   }
//   #first {
//     color: orange;
//   }
// </style>

// // might look something like this
// document {
//    getElementById(idName) {
//     //finds that idName on the page
//     return htmlObject;
//   }
// }
//
// htmlObject {
//   this.innerHTML = "Welcome to the DOM API";
// }
