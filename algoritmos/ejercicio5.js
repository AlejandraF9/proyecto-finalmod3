// Determinar si una palabra es un palíndromo.

function checkPalindrome(text) {
    let string = text.split("").reverse().join("");
    if(text === string) {
        console.log("It's a palindrome");
    } else {
        console.log("Isn't a palindrome");
    }
};

checkPalindrome("level");
checkPalindrome("elevator");