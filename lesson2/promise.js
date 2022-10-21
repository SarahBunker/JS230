// let ls = new Promise( function(resolve, reject) {
//   setTimeout(() => {
//     resolve("Launch School")
//   }, 2000)
// });
//
// ls.then( (successMessage) => {
//   console.log(successMessage);
// })

// const promise = new Promise( function(resolve, reject) {
//   setTimeout( () => {
//     reject("Error: Not Launch School");
//   }, 2000)
// })
//
// promise.catch( (failureMessage) => {
//   console.log(failureMessage);
// })

// const promise = new Promise(function (resolve, reject) {
//   resolve("I am a Promise");
// })
//
// promise.then(value => console.log(value));
// console.log("I am NOT a Promise");


// const promise1 = new Promise((resolve, reject) => {
//   console.log("foo"); // 1
//   resolve();
//   console.log("bar"); // 2
// });
//
// promise1.then(() => {
//   console.log("baz");  // 4
// });
//
// console.log("qux"); // 3

// const promise = new Promise((resolve, reject) => {
//   console.log("foo");  // 1
//   reject();
//   console.log("bar");  // 2
// });
//
// promise
//   .then(() => {
//     console.log("baz");
//   })
//   .catch(() => {
//     console.log("qux"); // 4
//   });
//
// console.log("abc");  // 3

// const promise = new Promise(res => res(1));
// promise
//   .then((num) => {
//     console.log(num); // 1
//     return num + 2;   // > 3
//   })
//   .then((num) => {
//     console.log(num); // 3
//     return num + 3;   // > 6
//   })
//   .then((num) => {
//     console.log(num); // 6
//     return num + 4;   // > 10
//   })
//   .finally((num) => {  !!! num is set to undefined
//     console.log(num); // undefined
//     return num + 5;   // > NaN
//   });
//
//   // 1, 3, 6, 10

// const promise = new Promise((resolve, reject) => {
//   resolve("Got it!"); // promise is set to resolved
//   reject("Oops.");
//   resolve("Again!");
// });
//
// promise
//   .then((res) => {
//     console.log(res); // got it
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// function after1s(x) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(x);
//     }, 1000);
//   });
// }
//
// async function test(input) {
//   const a = await after1s(2);
//   const b = await after1s(3);
//   return input * a * b;  // 3 * 2 * 3 = 18
// }
//
// test(3).then((value) => console.log(value));

// function after1s(x) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(x);
//     }, 1000);
//   });
// }
//
// async function test(input) {
//   const a = await after1s(2);
//   const b = await after1s(3);
//   return input * (await a) * (await b);
// }
//
// test(3).then((value) => console.log(value));

// function after1s(x, ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(x);
//     }, ms);
//   });
// }
//
// async function test1(input) {
//   const a = await after1s(2, 2000);
//   const b = await after1s(3, 2000);
//   return input * a * b;  // 2 * 2 * 3 = 12 after 4 seconds
// }
//
// async function test2(input) {
//   const a = await after1s(2, 1000);
//   const b = await after1s(3, 1000);
//   return input * a * b; // 3 * 2 * 3 = 18 after 2 seconds
// }
//
// test1(2).then((value) => console.log(value));
// test2(3).then((value) => console.log(value));

// const testPromise = () => Promise.resolve("1"); // instantly resolved
//
// function test1() {
//   testPromise().then((result) => console.log(result)); // promise resolved, but waiting for sync code to run
//   console.log("2");
// }
//
// function test2() {
//   console.log("3");
// }
//
// test1(); // puts log 1 on the task queue, logs 2
// test2(); // logs 3
// // sync code is finished so log 1 from the task queue is moved to the stack and then logs 1

// const test = Promise.resolve("A"); // promisse instantly resolved
//
// (async () => { // function imediatly invoked
//   try {
//     console.log(await test); // logs the return of the promise which is "A"
//   } catch {
//     console.log("E"); // no error so doesn't run
//   } finally {
//     console.log("B"); // executed for all, logs "B"
//   }
// })();

const test = Promise.reject("A"); // instantly rejected Promise

(async () => {
  try {
    console.log(await test); // the test was rejected so this code isn't ran
  } catch {
    console.log("E"); // catches the rejection logs "E"
  } finally {
    console.log("B"); // logs B no matter what
  }
})();
