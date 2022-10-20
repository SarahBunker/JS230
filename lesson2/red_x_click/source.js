
document.addEventListener('mousemove', event => {
  let x = document.body.querySelector('.x');
  let xPosition = event.clientX;
  let yPosition = event.clientY;
  x.style.left = String(xPosition) + "px";
  x.style.top = String(yPosition) + "px";
});

document.addEventListener('keyup', event => {
  let horizontal = document.querySelector('.x .horizontal');
  let vertical = document.querySelector('.x .vertical');
  let key = event.key;
  switch (key) {
    case 'b':
      horizontal.style.background = "blue"
      vertical.style.background = "blue"
      break;
    case 'g':
      horizontal.style.background = "green"
      vertical.style.background = "green"
      break;
    case 'r':
      horizontal.style.background = "red"
      vertical.style.background = "red"
      break;
  }
})


// document.addEventListener('click', event => {
//   let x = document.querySelector('.x');
//   x.style.left = String(event.clientX) + 'px';
//   x.style.top = String(event.clientY) + 'px';
// });

// document.addEventListener('keyup', event => {
//   let key = event.key;
//   let color;
//
//   if (key === 'r') {
//     color = 'red';
//   } else if (key === 'g') {
//     color = 'green';
//   } else if (key === 'b') {
//     color = 'blue';
//   }
//
//   if (color) {
//     let x = document.querySelector('.x');
//     for (let index = 0; index < x.children.length; index += 1) {
//       var child = x.children[index];
//       child.style.background = color;
//     }
//   }
// });
