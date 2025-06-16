// Crear una función que cuente cuántas veces aparece un carácter en un string.

function countLetter(text, letter) {
    let times = 0;

    for(let i = 0; i < text.length; i++) {
        if(text[i] === letter) {
        times++;
        }
    }
    return times;
};

console.log(countLetter("apple", "p"));
console.log(countLetter("notebook", "o"));
