//Escribir una función que determine si un número es par o impar.

function getOddEven(num) {
    if(typeof num !== "number") {
        console.log("Exercise 1: Value must be a number");
    } else if (num % 2 === 0) {
        console.log("Exercise 1: It's an even number");   
    } else {
        console.log("Exercise 1: It's an odd number");
    }
}

getOddEven("hola");
getOddEven(4);
getOddEven(11);