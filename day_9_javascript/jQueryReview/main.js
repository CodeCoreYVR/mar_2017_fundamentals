$(document).ready(function() {
  let names = [];
  $('#user-form').submit(function(event){
    let name = $('#name').val();
    names.push(name);
    $('#names').append(`
        <h3>${name}</h3>
        <hr>
      `);
    console.log(names);
    $('#name').val('');
    // this will prevent the default behaviour of the form which is either
    // submitting to the `action` URL or if you haven't specified the `action`
    // URL then the default behaviour of the form is to refresh the page.
    event.preventDefault();
  });
});
