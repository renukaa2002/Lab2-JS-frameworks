// main.js

import { 
  printWelcome,
  convertCelsiusToFahrenheit,
  squareNumber,
  calculateAverage
} from './utils.js';

// Call the functions
printWelcome("Renuka", "Rijal");

const fahrenheit = convertCelsiusToFahrenheit(25);
console.log(`25°C is ${fahrenheit}°F`);

const square = squareNumber(7);
console.log(`Square of 7 is ${square}`);

const avg = calculateAverage([85, 90, 78, 92, 88]);
console.log(`Average score is ${avg}`);
