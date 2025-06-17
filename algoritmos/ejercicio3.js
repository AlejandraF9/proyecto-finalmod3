// Escribir una función que encuentre el número mayor en un array.

function findBigNum() {
    let array = [4, 45, 33, 105, 26, -3];
    array = array.sort((a, b) => b - a);
    return array[0];
}

console.log(findBigNum());