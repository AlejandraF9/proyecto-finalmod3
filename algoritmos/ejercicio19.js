// Dado un año como parámetro (número), devuelve el número del siglo al que pertenece.

function getCentury(num) {
    let century = 0;

    for(let i = 0; i < num; i += 100) {
        century +=1;
    }
    return century;
}

console.log(getCentury(1895));
console.log(getCentury(1995));
console.log(getCentury(2005));