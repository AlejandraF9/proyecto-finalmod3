// Crear un algoritmo que valide si un string tiene paréntesis balanceados.

function checkBracketsBalance(text) {
    let brackets = 0;

    for (let i = 0; i < text.length; i++) {
        const letter = text[i];

        if(letter === "(") {
            brackets++;
        } else if (letter === ")") {
            brackets--;
        }
    }

    return brackets === 0;
}
 
console.log("Exercise 17:", checkBracketsBalance("hola"));
console.log("Exercise 17:", checkBracketsBalance("((hola)"));