// Crear un algoritmo que invierta un string.

function reverseString(string) {
    return string.split("").reverse().join("");
}

const text = reverseString("notebook");
console.log(text);