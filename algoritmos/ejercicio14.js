// Escribir un programa que verifique si dos strings son anagramas.

function validateAnagrams(text1, text2) {
    const letters1 = text1.split("").sort().join("");
    const letters2 = text2.split("").sort().join("");

    if(letters1 === letters2) {
        console.log("Exercise 14: It's an Anagram");
    } else {
        console.log("Exercise 14: Isn't an Anagram");   
    }
    
}

validateAnagrams("Roma", "Ramo");
validateAnagrams("Ramo", "Saco");