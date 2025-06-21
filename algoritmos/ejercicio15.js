// Crear un programa que devuelva los números primos hasta el número (n).

function returnPrimesNumber(num) {
    const primesArray = [];
    for(let i = 2; i <= num; i++) {
        let prime = true;
    
        for(let j = 2; j < i; j++) {
            if (i % j === 0) {
                prime = false;
                break;
            }
        }

        if(prime) {
            primesArray.push(i);
        }
    }
        return `The prime numbers until ${num} are ${primesArray}`;
}

console.log("Exercise 15:", returnPrimesNumber(11));