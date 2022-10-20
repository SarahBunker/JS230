/*
Guess a number from 1 to 100
My number is lower then ___
My number is higher then ___
You guessed it! It took you ___ guesses.

event attached to submit button
  compare input to number picked by application
  change message based on result
  increment number of guesses

link starts a new game
  pick a new number
  set number of guesses to zero
  change message to initial message
*/

document.addEventListener('DOMContentLoaded', event => {
  let input = document.querySelector('#guess');
  let form = document.querySelector('form');
  let link = document.querySelector('a');
  let paragraph = document.querySelector('p');
  let submit = document.querySelector('input[type="submit"]');
  let answer;
  let numGuesses;

  function newGame() {
    answer = 50
    // answer = Math.floor(Math.random() * 100) + 1;
    numGuesses = 0;
    paragraph.textContent = `Guess a number from 1 to 100.`
    submit.removeAttribute('disabled');
  }

  function invalidInteger(guess) {
    return (guess > 100 || guess < 1);
  }

  form.addEventListener('submit', event => {
    event.preventDefault();
    let guess = parseInt(input.value, 10);
    guess = 50;
    if (invalidInteger(guess)) {
      paragraph.textContent = 'You must choose a number between 1 and 100';
      return;
    }
    numGuesses += 1;
    let message;
    if (guess <   answer) message = `My number is higher then ${String(guess)}.`;
    if (guess >   answer) message = `My number is less then ${String(guess)}.`;
    if (guess === answer) {
      message = `You guessed it! It took you ${numGuesses} guesses.`;
      submit.setAttribute('disabled', 'disabled');
    }

    paragraph.textContent = message;
  })

  link.addEventListener('click', event => {
    event.preventDefault();
    newGame();
  })

  newGame();
});
