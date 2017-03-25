$(document).ready(function(){
  // this is a jquery function
  // $('img');
  // $('a');
  // $('#reddit');
  // $('.highlight');

  // it takes in as an argument a CSS Selector
  // p {
  //
  // }
  //
  // <p></p>
  //
  // div {
  //
  // }
  //
  // <div></div>
  //
  // .highlight {
  //
  // }
  //
  // <div class="highlight"></div>
  //
  // #reddit {
  //
  // }
  //
  // <a id="reddit" href="http://reddit.com">REDDIT!</a>

  // 1. Select all shapes
  $('.shape');

  // 2. Select all black shapes
  $('.shape.black');
  $('.black.shape');

  // 3. Count the number of shapes
  $('.shape').length;

  // 4. Count the number of black shapes
  $('.shape.black').length;

  // 5. Count the number of black shapes AND blue shapes
  $('.shape.black').length + $('.shape.blue').length;
  $('.shape.blue, .shape.black').length;

  // 6. Select all h1 tags
  $('h1');

  // 7. Select all small circles
  $('.circle.small');


  // 1. Select all red shapes inside the orange container
  $('#orange-container .shape.red');
  // 2. Select all medium and small shapes inside the green
  // container
  $('#green-container .shape.medium, #green-container .shape.small');
  // this will select all small shapes even if they are not in a green container
  // $('#green-container .shape.medium, .shape.small');


  // 3. Select all shapes inside any container
  $('.container .shape');

  // 4. Select all link tags
  $('a');

  // 5. Select all the link tags inside an "li" tag
  $('li a');

  // 6. Count the number of small blue circles
  // order does not matter
  $('.small.blue.circle').length;


  // <a href="http://reddit.com">Link</a>
  // <img src="trump.jpg" width="100px" height="200px">

  $('img').attr('src'); // 'trump.jpg' - getter
  $('img').attr('src', 'hillary.jpg'); // setter

  // 1. Get the "href" attribute of the first link on the page
  // eq will select only the first result from our "wrapped set"
  $('a').eq(0).attr('href');

  // 2. Set the "href" attribute of all links on the page to "http://
  // www.codecore.ca". Try clicking one.
  $('a').eq(0).attr('href', 'http://codecore.ca/');
  $('a').attr('href', 'http://codecore.ca/');

  // 3. Set the "class" attribute of all links to "highlight"
  $('a').attr('class', 'highlight');
  // <a href="http://google.com/" class="highlight">Google</a>

  // 4. Set the "class" attributes of all shapes to "highlight". What happened?
  $('.shape').attr('class','highlight');
  $('.shape').addClass('highlight');


  // ****** MANIPULATORS ********
  // 1. Remove all blue shapes
  $('.shape.blue').remove();

  // 2. Remove all shapes in the orange container
  $('#orange-container .shape').remove();

  // 3. Remove all small red circles
  $('.small.red.circle').remove();

  // 4. Get the html contents of the reset button.
  $('button#reset').html();

  // 5. Try to get the html contents of all links. What happened?
  $('a').html(); // html when it's a getter is an example of a reader

  // 6. Change the reset button to read "Launch Missiles!"
  $('#reset').html('Launch Missiles!');

  // 7. Change all the H1 tags to read "[Your Name] is Cool!"
  $('h1').html('Ben is cool!');


  // ******* TRAVERSALS ********
  // 1. Select all the shapes in the purple container using "children"
  $('#purple-container').children();
  // 2. Select the green container using "parent"
  $('.shape.medium.red.diamond').parent();
  // 3. Select all the "li" tags that contain a link.
  $('li').children('a');

  // 1. Hide the purple container
  $('#purple-container').hide();
  // 2. Show the purple container again
  $('#purple-container').show();
  // 3. Hide all the links.
  $('a').hide();
  // 4. Show all the links again.
  $('a').show();

  // fadeIn, fadeOut

  // ************ EVENTS ***********
  // 1. When any shape is clicked, log "shape clicked" to the
  // console
  $('.shape').on('click', function(){
    console.log("shape clicked");
  });
  // 2. When your mouse enters any blue circle, log "Blue Circle:
  // Go away!" to the console.
  $('.blue.circle').on('mouseenter', function(){
    console.log("Blue Circle: Go away!");
  });
  // 3. When your mouse leaves a blue circle, log "Blue Circle:
  // Goodbye! to the console.
  $('.blue.circle').on('mouseleave', function(){
    console.log('Blue Circle: Goodbye!');
  });
  // 4. When your mouse enters any "tr", set its class to "highlight".
  $('tr').on('mouseenter', function(){
    // add class highlight?
    // $('tr').attr('class', 'highlight'); // highlights every single tr
    $(this).attr('class', 'highlight');
    // $(this).addClass('highlight');
  });
  // 5. When your mouse leaves any "tr", set its class to "".
  $('tr').on('mouseleave', function(){
    $(this).attr('class', '');
    // $(this).removeClass('highlight');
  });

  // window.onLoad = function(){};
  // document.addEventListener("DOMContentLoaded", function{})

});
// $('tr').click();








//
