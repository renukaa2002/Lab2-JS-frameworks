// utils.js

// 1. Welcome message function (no return)
export function printWelcome(firstName, lastName) {
  console.log(`Welcome ${firstName} ${lastName} to G@I College!`);
}

// 2. Convert Celsius to Fahrenheit
export function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// 3. Math operation: Square of a number
export function squareNumber(num) {
  return num * num;
}

// 4. Advanced: Average of array of numbers
export function calculateAverage(numbers) {
  const sum = numbers.reduce((acc, val) => acc + val, 0);
  return (sum / numbers.length).toFixed(2);
}
