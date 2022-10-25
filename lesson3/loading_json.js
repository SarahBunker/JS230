// let request = new XMLHttpRequest();
// // request.open('GET', `https://api.github.com/repos/rails/rails`);
// request.open('GET', 'hts://api.github.com/repos/rails/rails')
// request.responseType = 'json';
//
// request.addEventListener( 'error', event => {
//   console.log('The request could not be completed');
// })
//
// request.addEventListener( 'load', event => {
//   let data = request.response;
//   // let data = JSON.parse(request.response);
//   console.log(request.status);
//   console.log(data.open_issues);
// })
//
// request.send();

let request = new XMLHttpRequest();
request.opent('POST', 'https://ls-230-web-store-demo.herokuapp.com/v1/products');

request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
let data = {"name": "amazing pen", "sku": "amz19", "price": 200};
let json = JSON.stringify(data);

request.send(json);
