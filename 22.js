//Implement a recursive function to find the nth Fibonacci number.

function fibo(num) {
  if (num === 1) {
    return 0;
  }
  if (num === 2) {
    return 1;
  }

  return fibo(num - 1) + fibo(num - 2);
}
console.log(fibo(5));
