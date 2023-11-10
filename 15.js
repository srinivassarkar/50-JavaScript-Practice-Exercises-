// Write a function that takes an array of numbers and returns a new array with only the even numbers.
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumber = array.filter((num) => {
  return num % 2 === 0;
});

console.log(evenNumber);
