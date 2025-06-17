
// Encontrar el segundo número más grande en un array.

function findSecondMaxNum() {
    let array = [10, 38, -5, 87, 77, 56, 124];
    array = array.sort((a, b) => b - a);
    return array[1];
}

console.log(findSecondMaxNum());