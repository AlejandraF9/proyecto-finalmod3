//Escribir una función que determine si un número es par o impar.

function getOddEven(num) {
    if (num % 2 === 0) {
        console.log("It's an even number");   
    } else {
        console.log("It's an odd number");
    }
}

getOddEven(4);
getOddEven(11);
