// higher-order functions
// build a calculator using higher order functions

// add - make a function that adds 2 numbers together
let add = function(x, y) {
  return x + y;
};

// (); -> this executes the function
// let result = add(5, 6); // 11
// document.write( add(5, 6) ); // 11

// subtract - make a function that subtracts 2 numbers
let subtract = function(x, y) {
  return x - y;
};
// multiply - make a function that multiplies 2 numbers
let multiply = function(x, y) {
  return x * y;
};
// divide - make a function taht divides 2 numbers
let divide = function(x, y) {
  let result = x / y;
  return result;
};

// higher order function called 'calc'. calc will accept 3 arguments:
// 1. function, 2. number, 3. number
let calc = function(fn, x, y) {
  return fn(x, y);
};

calc(add, 3, 4); // 7
calc(subtract, 7, 5); // 2
calc(multiply, 6 * 5); // 30
calc(divide, 10, 2); // 5


// jquery

// DOM - document object model
<script src='jquery-3.2.0.js'></script>
document.getElementById('error-message-container');
<style>
  #error-message-container {

  }
</style>

$('#error-message-container').html();
$('#error-message-container').css('color', 'red');
$('#error-message-container').hide();

// events
// document.addEventListener("DOMContentLoaded", function(){});
// $(document).ready(function(){});
// this is an example of a higher-order function
$(function(){
  // we can be sure that the document is ready
  // click, mouseover, mouseleave, keypress, hover
  $('button').click(function() {
    console.log('Yup! A button was clicked!');
  });

  $(document).keypress(function(event){
    console.log(event);
    console.log(`The key that was pressed was: ${event.key}`);
  });

});












//
