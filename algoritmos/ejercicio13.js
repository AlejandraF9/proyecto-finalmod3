// Crear un algoritmo que sume todos los números de un array.

function sumNumbers() {
    const array = [1, 2, 3, 4, 5, 6];
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log(sumNumbers());