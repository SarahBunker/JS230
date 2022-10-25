$(function () {
  let calculate = function(stringNum1, stringNum2, stringOp) {
    let num1 = Number(stringNum1);
    let num2 = Number(stringNum2);
    switch (stringOp) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
    }
  }

  $("form").submit( function(event) {
    event.preventDefault();

    let $result = $("#result");
    let firstNumber = $("#first-number").val();
    // let operator = $('select').children(':selected').text();
    let operator = $('select option:selected').text();
    // let secondNumber = $("#second-number").val();
    let secondNumber = $("[name='second-number']").val();


    let total = calculate(firstNumber, secondNumber, operator);
    let fig;
    $result.text(total);
  })


});
