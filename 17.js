//Find the largest element in an array using the `reduce()` method.

const numbers = [1, 2, 3, 10, 4, 5, 6];

function largestNum(max, current) {
  return current > max ? current : max;
}
console.log(numbers.reduce(largestNum));
