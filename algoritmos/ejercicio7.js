// Ordenar un array de números en orden ascendente (sin usar sort)

function orderAscending(array) {
    let result = [];

    while (array.length > 0) {
        let smallNum = array[0];

        if(typeof smallNum !== "number") {
            console.log("smallNum must to be a number");
        }

        for (let i = 0; i < array.length; i++) {
            if (array[i] < smallNum) {
                smallNum = array[i];
            }
        }

        result.push(smallNum);
        array.splice(array.indexOf(smallNum), 1);
    }

    return result;
}

console.log(`Exercise 7: The ascending order of the array is ${orderAscending([5, 4, 3, 4, 2, 1])}`);