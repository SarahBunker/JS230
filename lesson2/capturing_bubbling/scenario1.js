document.addEventListener('DOMContentLoaded', event => {
  let elem4 = document.querySelector('#elem4');

  elem4.addEventListener('click', event => alert(event.target.id));
});

// let elem4 = document.querySelector('#elem4');
//
// elem4.addEventListener('click', event => alert(event.target.id));
