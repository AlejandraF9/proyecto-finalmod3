// Crear un algoritmo que devuelva el factorial de un número.

function returnFactorial(num) {
    let factorial = 1;
    for(let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

 console.log(returnFactorial(5));