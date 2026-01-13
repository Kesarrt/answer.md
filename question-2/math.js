// math.js

// Function to check if a number is prime
export function checkPrime(number) {
    // 1. Numbers less than 2 are not prime
    if (number < 2) {
        return false;
    }

    // 2. Check for factors from 2 up to the square root of the number
    // (This is more efficient than checking up to the number itself)
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; // Found a divisor, so it's not prime
        }
    }

    // 3. If no divisors were found, it is prime
    return true;
}