// Write a function that takes a string and returns the reversed version of it.

//Using Built-in Reverse

function reverseString(str1) {
  return str1.split("").reverse().join("");
}
str1 = "I am Batman";
console.log(reverseString(str1));

//USing for loop

function usingForReverseString(str2) {
  reverseStr = "";
  for (let i = str2.length - 1; i >= 0; i--) {
    return (reverseStr += str2[i]);
  }
}

str2 = "I am Superman";
console.log(reverseString(str2));


