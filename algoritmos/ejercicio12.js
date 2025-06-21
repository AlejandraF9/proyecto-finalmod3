// Escribir una función que elimine los elementos duplicados de un array.

function deleteDuplicates(array) {

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i !== j && array[i] === array[j]) {
                array.splice(j, 1);
                j--;
            }
        }
    }

    return array;
}

console.log("Exercise 12:", deleteDuplicates([5, 4, 3, 4, 2, 4, 4, 3, 5, 1]));

console.log("Exercise 12:", deleteDuplicates([5, "hola", 3, 4, 2, "hola", 4, 5, 1]));