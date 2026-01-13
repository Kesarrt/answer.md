// index.js

// Import the function using ES Module syntax
// Note: You MUST include the .js extension in the import path
import { checkPrime } from './math.js';

// Test cases
const num1 = 17;
const num2 = 10;
const num3 = 1;

// Calling the function and printing results
console.log(`Is ${num1} a prime number?`, checkPrime(num1)); 
console.log(`Is ${num2} a prime number?`, checkPrime(num2)); 
console.log(`Is ${num3} a prime number?`, checkPrime(num3)); 