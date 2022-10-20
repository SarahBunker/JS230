let cursorInterval;
let focusedTextField;

document.addEventListener('DOMContentLoaded', event => {
  let textField = document.querySelector(".text-field");

  textField.addEventListener('click', event => {
    event.stopPropagation();
    textField.classList.add('focused');

    focusedTextField = textField;

    if (cursorInterval) return;
    cursorInterval = setInterval(() => textField.classList.toggle('cursor'), 500);
  })

});

document.addEventListener('keydown', event => {
  if (!focusedTextField) return;
  let contentDiv = focusedTextField.querySelector('.content');

  if (event.key === "Backspace") {
    let text = contentDiv.textContent
    let length = contentDiv.textContent.length
    contentDiv.textContent = text.slice(0, length - 1);
    return;
  }

  contentDiv.textContent += event.key;
})

// document.addEventListener('keydown', event => {
//   if (focusedTextField) {
//     let contentDiv = focusedTextField.querySelector('.content');
//     if (event.key === 'Backspace') {
//       contentDiv.textContent = contentDiv.textContent.slice(0, contentDiv.textContent.length - 1);
//     } else if (event.key.length === 1) {
//       contentDiv.textContent = contentDiv.textContent + event.key;
//     }
//   }
// });

document.addEventListener('click', event => {
  clearInterval(cursorInterval);
  cursorInterval = null;

  if (!focusedTextField) return;

  focusedTextField.classList.remove('focused');
  focusedTextField.classList.remove('cursor');
  focusedTextField = null;
})
