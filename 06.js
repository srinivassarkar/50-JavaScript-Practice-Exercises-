//Write a function that checks if a number is even or odd and returns "Even" or "Odd" accordingly.

function evenOrOdd(num) {
  if (num % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
let num = 1;
console.log(evenOrOdd(num));

//Using ternary Operator

console.log(num % 2 == 0 ? "Even" : "Odd");
