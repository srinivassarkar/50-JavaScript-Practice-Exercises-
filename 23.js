// Create a counter function using closures that increments and returns the count on each call.

function counter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

let increment = counter();

console.log(increment());
console.log(increment());
console.log(increment());
