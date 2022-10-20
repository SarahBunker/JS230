let counterID;

setTimeout( () => clearInterval(counterID), 10000);

function startCounting() {
  let count = 1
  counterID = setInterval( () => {
    console.log(count);
    count += 1;
  }, 1000);
}

startCounting();
