// Create a program that checks if a given year is a leap year.

function leapYear(year) {
  return (year % 4 == 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(leapYear(2020));
