// Crear un algoritmo que invierta un string.

function reverseString(string) {
    if(typeof string === "string") {
        let reversedString = string.split("").reverse().join("");
        console.log("Exercise 2:", reversedString);
    } else {
        console.log("Exercise 2: Value must be a string");
    }
}

reverseString("notebook");
reverseString(true);