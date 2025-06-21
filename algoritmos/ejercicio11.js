
// Encontrar el segundo número más grande en un array.

function findSecondMaxNum(array) {
    array.sort((a, b) => b - a);
    return `The second highest number is ${array[1]}`;
}

console.log("Exercise 11:", findSecondMaxNum([10, 38, -5, 87, 77, 56, 124]));