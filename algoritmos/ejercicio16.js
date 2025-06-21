// Escribir una función que convierta un número romano a número arábigo.

function convertRomansToArabic(num) {
    const romans = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let convertedNum = 0;

    for(let i = 0; i < num.length; i++) {
        const firstNum = romans[num[i]];
        const nextNum = romans[num[i + 1]];

        if(firstNum < nextNum) {
            convertedNum += nextNum - firstNum;
            i++;
        } else {
            convertedNum += firstNum;
        }
    }

    return `The roman number ${num} in arabic is ${convertedNum}`;
}

console.log("Exercise 16:", convertRomansToArabic("MCXIX"));