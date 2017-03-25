// good morning fundamentals!
// let is more strict
let school = "CodeCore";
let school = "SFU";

// var, the older way to define variables is less strict
// var teacher = "Jacob";
// var teacher = "Tam";

const PI = 3.14159;
const car = {
  make: "Honda";
};

car.model = "Accord";

// function expression - when an anonymous function is
// assigned to a variable, we can control it's scope.
const isOdd = function(number) {
  // ! means not, != means not equal
  // if (number % 2 != 0) {
  //   return true;
  // }
  return (number % 2 != 0);
};

console.log(isOdd.name);
isOdd(10); // false
isOdd(5); // true

const isEven = function(number) {
  // if (number % 2 === 0) {
  //   return true;
  // }
  return (number % 2 === 0);
}

isEven(10); // true
isEven(5); // false

// function declaration - global namespace
// function isOdd() {}


// higher order functions - functions that take in functions
// as arguments
let sayHello = function() {
  console.log("Hi!");
}

// call is a higher order function because it takes in a function
// as an argument
let call = function(fn) {
  fn();
}

call(sayHello);
call(sayHello);
call(sayHello);

// the filter will be a higher order function
// it will take in a function as an argument, it will also take in an array
// of numbers
               // isOdd, [1,2,3,4,5]

const isOdd = function(number) {
  // ! means not, != means not equal
  // if (number % 2 != 0) {
  //   return true;
  // }
  return (number % 2 != 0);
};

let filter = function(fn, array) {
  // create an empty to hold our resulting array
  let resultArray = [];
  //
  // loop through the array being passed in
  for (let number of array) {
    // console.log(number);
    //  for each one of the values check if it is odd
    // if (fn(number) == true) {
    if (fn(number)) {
        // if it is odd push it into the resulting array
      resultArray.push(number);
    }
    // if (isOdd(1) == true) { resultArray.push(1) }
  }
  // return out the resulting array
  // return [1,3,5];
  return resultArray;
};

let numbers = [1,2,3,4,5];

console.log( filter(isOdd, numbers) ); // [1,3,5]
console.log( filter(isEven, numbers) ); // [2,4]

// DOM - Document Object model
// changes all our hyper links on wikipedia to pink
for (let i=0; i<document.links.length; i++) {
  document.links[i].style.color = "pink";
}

// API - Application Programming Interface
// communication tool for software



CSS Selectors

h1 {

}

.highlight {

}

#reset {

}

// select anything that is either h1, h2, h3
h1, h2, h3 {

}

// select all the list items that are contained in an unordered list
ul li {

}

<ul>
  <li>
    <ol>
      <li></li>
      <li></li>
      <li></li>
    </ol>
  </li>
  <li></li>
  <li></li>
</ul>

// forces to selector to only choose direct parent child relationship
ul > li {

}

a {
}

a:hover {

}

// a:nth(0)
//

// .eq()
//
// a[href]


//



//
let resultSet = $('a'); // grab all the hyperlinks on a page
// resultSet.length
// resultSet[0]
// resultSet.eq(0)

// result set is an array of html objects
// result set is an array of document objects

//
html(); // get and set the inner html
<h1>This Content Is The Inner HTML</h1>

<a href="http://www.google.com">
$('a').attr();
$('a').attr('href');
$('a').attr('href', 'http://www.codecore.ca');

// traversals
HTML -> BODY -> H1 -> INNER HTML

// ul -> li -> a
$('a').parent();
$('li').children();

// events
click
mouseenter
mouseleave

// anchor tag
// when an anchor tag is clicked
// navigate to the website that is specified in the href attribute

<a href="">Home</a>
<a href="">About</a>
<a href="">Contact</a>

<people id="jacob"></people>
<people></people>
<people></people>

$('a').click(function(){
  console.log("stand up");
  // only the person who catches the ball will stand up
  // $(this) will select the person calling the function
  $(this).attr('class', 'highlight');
});


//  keyboard events
$(this);
$('a');
$('tr');

$(function() {
  $(document).keypress(function(event){
    console.log("You pressed a key on the keyboard");
    console.log(event.key);
  });
});

// jquery selectors - modify css
<p>Lorem ispum...</p>

$('p').css('background-color');
$('p').css('background-color', 'yellow');

#mr-pink {
  position:relative;
  top: 10;
  left: 10;
  // bottom:
  // right:
  padding: 5px 10px 15px 20px;
  border: thin red border;
}
$('#mr-pink').css('padding', '5px 10px 15px 20px');
$('#mr-pink').css('position', 'relative')
$('#mr-pink').css('top', '10px')
$('#mr-pink').css('left', '10px');

let x = 0;
let y = 0;

// move a character
<style>
  #mr-pink {
    position: relative;
    top: 10px;
  }
</style>
<div id="mr-pink" class="red square large shape" style="top: 20px;">

$('#mr-pink').attr('style', 'top: 20px;');
$('#mr-pink').css('top', '20px');

$('#mr-pink').attr('class', 'highlight');
$('#mr-pink').addClass('highlight'); // adds the class highlight to
// the list of existing classes
$('#mr-pink').removeClass('red');
$('#mr-pink').toggleClass('highlight'); // if the class exists
// remove it. if the class does not exist, add it

// animations
// slide up, slide down, fade in, fade out
$('#green-container').slideUp();


$(document).keypress(function(event) {
  if (event.key == 'w') {
    // move the player up the screen
    $('#mr-pink').css('top', x--);
  } else if (event.key == 's') {
    // move the player down the screen
    $('#mr-pink').css('top', x++);
  }
});


me = {
  name: "Jacob",
  age: 38
}

console.log(`${name} is ${age} years old`);











//













//
