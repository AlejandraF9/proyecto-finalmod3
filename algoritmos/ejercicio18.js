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

    let transformedString = "";

    for(let i = 0; i < sentence.length; i++) {
    const letter = sentence[i].toUpperCase();
    transformedString += leetSpeak[letter] || sentence[i];
}

return `The leet speak form of "${sentence}" is "${transformedString}"`;
}

console.log("Exercise 18:",transformToLeetSpeak("This is a test"));