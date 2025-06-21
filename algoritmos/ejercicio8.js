// Crear una función que cuente cuántas veces aparece un carácter en un string.

function countLetter(text, letter) {
    let times = 0;

    for(let i = 0; i < text.length; i++) {
        if(text[i] === letter) {
        times++;
        }
    }
    return `The number of times the letter ${letter} is repeated is ${times} times`;
};

console.log("Exercise 8:", countLetter("apple", "p"));
console.log("Exercise 8:", countLetter("notebook", "o"));