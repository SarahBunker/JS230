let character;

$(function () {
  // $("form").on('submit', function (event) {
  $("form").submit(function (event) {
    event.preventDefault();
    let $input = $(this).find("input[type=text]");
    character = $input.val();
  })

  $(document).off('keypress').on('keypress', function(event) {
    if (event.key !== character) return;
    $('a').trigger('click');  
  });

  $("a").click(function (event) {
    event.preventDefault();
    $div = $('#accordion');
    $div.slideToggle();
  })

});
