//Write a recursive function to calculate the factorial of a given number.

function fact(num) {
  if (num === 1 || num === 0) {
    return 1;
  } else {
    return num * fact(num - 1);
  }
}
console.log(fact(5));
