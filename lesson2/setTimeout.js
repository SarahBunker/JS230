// setTimeout(() => {
//   console.log('!');
// }, 3000);
//
// setTimeout(() => {
//   console.log('World');
// }, 1000);
//
// console.log('Hello');

// problem 1 ----------------------------

// function delaylog() {
//   function callback(number) {
//     console.log(number);
//   }
//   [1,2,3,4,5,6,7,8,9,10].forEach( number => {
//     setTimeout(callback, number * 1000, number);
//   })
// }
//
// delaylog();

// problem 2 ----------------------------

// setTimeout(() => {     // 1
//   console.log('Once'); // 5
// }, 1000);
//
// setTimeout(() => {     // 2
//   console.log('upon'); // 7
// }, 3000);
//
// setTimeout(() => {     // 3
//   console.log('a');    // 6
// }, 2000);
//
// setTimeout(() => {     // 4
//   console.log('time'); // 8
// }, 4000);

/*
Once
a
upon
time
*/

// problem 3 ----------------------------

// function q() {
//   console.log('q');
// }
//
// function d() {
//   console.log('d')
// }
//
// function n() {
//   console.log('n')
// }
//
// function z() {
//   console.log('z')
// }
//
// function s() {
//   console.log('s')
// }
//
// function f() {
//   console.log('f')
// }
//
// function g() {
//   console.log('g')
// }
//
// setTimeout(() => {
//   setTimeout(() => {
//     q();              //25
//   }, 15);
//
//   d();                //20
//
//   setTimeout(() => {
//     n();             //25
//   }, 5);
//
//   z();               //20
// }, 10);
//
// setTimeout(() => {
//   s();              //20
// }, 20);
//
// setTimeout(() => {
//   f();             //0 meaning execute "immediately", or more accurately, the next event cycle.
// });
//
// g();               //0
/*
f
g
d
z
n
s
q
*/
// problem 4 ----------------------------

// function afterNSeconds(callback, seconds) {
//   setTimeout(callback, seconds * 1000);
// }
