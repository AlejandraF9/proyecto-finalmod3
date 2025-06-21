// Crear un programa que calcule el número Fibonacci en la posición (n).

function calculateFibonacci(n) {
    if(n === 0) return 0;
    if(n === 1) return 1;

    return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
}

console.log(`Exercise 6: The Fibonacci number at position 5 is ${calculateFibonacci(5)}`);