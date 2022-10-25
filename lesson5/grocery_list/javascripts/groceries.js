$(function () {
  $("form").submit( function(event) {
    event.preventDefault();

    let itemName = $('#name').val().trim();
    if (!itemName) return;
    let itemQuantity = $('#quantity').val().trim() || '1';

    $("#grocery-list").append(`<li>${itemQuantity} ${itemName}</li>`);

    $('#name').val('');
    $('#quantity').val('');
  })
});
