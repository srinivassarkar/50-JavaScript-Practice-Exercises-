//Implement a private variable using closures.

function makeCounter() {
  // privateCounter is private, only accessible inside this function
  let privateCounter = 0;

  // changeBy allows modifying the private counter
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
}

const counter = makeCounter();
counter.increment();
counter.increment();

console.log(counter.value());
