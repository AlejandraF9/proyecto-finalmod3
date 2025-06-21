// Crear un algoritmo que sume todos los números de un array.

function sumNumbers(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return `The sum of the values in the array is ${sum}`;
}

console.log("Exercise 13:", sumNumbers([1, 2, 3, 4, 5, 6]));