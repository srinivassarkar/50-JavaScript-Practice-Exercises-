//Find the sum of all elements in an array.

//reduce method

function reduceSum(arr) {
  return arr.reduce((i, j) => i + j);
}

let arr = [1, 2, 3, 4, 5];
console.log(reduceSum(arr));

//Using for loop

function sumOfArr(arr) {
  let total = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    total += arr[i];
  }
  return total;
}

console.log(sumOfArr(arr));
