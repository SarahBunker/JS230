document.addEventListener('DOMContentLoaded', event => {
  let elem2 = document.querySelector('#elem2');

  elem2.addEventListener('click', event => alert(event.currentTarget.id));
});
