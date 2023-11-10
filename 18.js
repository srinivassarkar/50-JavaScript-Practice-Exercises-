//Remove all occurrences of a specific element from an array.

const numbers = [1, 2, 3, 4, 5, 5, 5];
const target = 5;

console.log(numbers.filter((num) => num !== target));
