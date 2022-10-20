document.addEventListener('DOMContentLoaded', event => {
  let elem1 = document.querySelector('#elem1');

  document.addEventListener('keypress', event => {
    setTimeout(() => alert(event.code), 7000);
  });

  elem1.addEventListener('click', event => {
    setTimeout(() => alert(event.target.tagName), 7000);
  });
});
