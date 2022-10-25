document.addEventListener('DOMContentLoaded', () => {
  let store = document.getElementById('store');

  let request = new XMLHttpRequest();
  request.open('GET', 'https://ls-230-web-store-demo.herokuapp.com/products');
  // request.responseType = `json`;

  request.addEventListener('load', event => store.innerHTML = request.response);
  request.send();

  store.addEventListener('submit', event => {
    let form = event.target;

    event.preventDefault();
    let request = new XMLHttpRequest();

    let data = new FormData(form);
    // let data = request.response;

    request.open('POST', `https://ls-230-web-store-demo.herokuapp.com${form.getAttribute('action')}`);
    request.setRequestHeader('Authorization', 'token AUTH_TOKEN');

    request.addEventListener('load', event => store.innerHTML = request.response);
    request.send(data);
  });
});
