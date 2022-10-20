// let p = new Promise((resolve, reject) => {
//   let value = Math.random();
//   if (value < 0.75) {
//     resolve(value);
//   } else {
//     reject(value);
//   }
// });
//
// async function showResult(p) {
//   let value = await p;
//   try {
//     console.log(`In range: ${value}`)
//   } catch (error) {
//     console.log(`Out of range: ${error}`);
//   }
// }
//
// showResult(p);

let obj = {
  names: ['Sue', 'Kim', 'Bob'],
  [Symbol.asyncIterator]() {
    return {
      list: this.names,
      index: this.names.length,
      next() {
        if (this.index === 0) return { done: true };
        this.index -= 1;
        return {
          done: false,
          value: this.list[this.index],
        }
      }
    };
  }
};

console.log([...obj]); // ['Bob', 'Kim', 'Sue']
