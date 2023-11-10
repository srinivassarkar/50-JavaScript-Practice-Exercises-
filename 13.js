// Write a function that calculates the factorial of a given number.

function factorialOfNum(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    let fact = 1;
    for (let i = num; i >= 1; i--) {
      fact *= i;
    }
    return fact;
  }
}

console.log(factorialOfNum(5));
