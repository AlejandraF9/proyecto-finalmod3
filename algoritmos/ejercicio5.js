// Determinar si una palabra es un palíndromo.

function checkPalindrome(text) {
    let string = text.split("").reverse().join("");
    if(text === string) {
        console.log("Exercise 5: It's a palindrome");
    } else {
        console.log("Exercise 5: Isn't a palindrome");
    }
};

checkPalindrome("level");
checkPalindrome("elevator");