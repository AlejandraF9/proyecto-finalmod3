// Escribir una función que encuentre el número mayor en un array.

function findBigNum(array) {
    array.sort((a, b) => b - a);
    return array[0];
}

console.log(`Exercise 3: The second highest number is ${findBigNum([4, 45, 33, 105, 26, -3])}`);