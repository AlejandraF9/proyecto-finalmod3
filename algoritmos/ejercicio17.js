// Crear un algoritmo que valide si un string tiene paréntesis balanceados.

function checkBracketsBalance(text) {
    let brackets = 0;

    for (let i = 0; i < text.length; i++) {
        const letter = text[i];

        if(letter === "(") {
            brackets++;
        } else if (letter === ")") {
            brackets--;

            if(brackets < 0) {
                return false;
            }
        }
    }

    return brackets === 0;
}
 
console.log(checkBracketsBalance("hola"));
console.log(checkBracketsBalance("((hola)"));