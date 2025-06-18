// Crear un programa que transforme una frase en "notación hacker" (leet speak).

function transformToLeetSpeak(sentence) {
    const leetSpeak = {
        A: 4,
        E: 3,
        I: 1,
        O: 0,
        S: 5,
        T: 7,
    };

    let string = "";

    for(let i = 0; i < sentence.length; i++) {
    const letter = sentence[i].toUpperCase();
    string += leetSpeak[letter] || sentence[i];
}

return string;
}

console.log(transformToLeetSpeak("This is a test"));