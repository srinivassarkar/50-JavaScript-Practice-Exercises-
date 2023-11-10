// Create a function that generates a random number between a given range.

function randomFunction(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomFunction(1, 5));
