// Dado un año como parámetro (número), devuelve el número del siglo al que pertenece.

function getCentury(num) {
    let century = 0;

    for(let i = 0; i < num; i += 100) {
        century +=1;
    }

    return `The year ${num} corresponds to the ${century} century`;
}

console.log("Exercise 19:", getCentury(1000));
console.log("Exercise 19:", getCentury(1995));
console.log("Exercise 19:", getCentury(2001));