$(function () {
  let $p = $('p');
  const OUTPUT = "Your Favorite Fruit is: "

  // $("a").on("click", function (event) {
  $("a .list1").click(function (event) {
    event.preventDefault();
    let $anchor = $(this);
    $p.text(OUTPUT + $anchor.text());
  });

  // $("form").on('submit', function (event) {
  $("form").submit(function (event) {
    event.preventDefault();
    let $input = $(this).find("input[type=text]");
    $p.text(OUTPUT + $input.val());
  })

  $("a .list2 ul").on("click", "a", function (e) {
    e.preventDefault();
    $(e.target).closest("li").remove();
  });
});
