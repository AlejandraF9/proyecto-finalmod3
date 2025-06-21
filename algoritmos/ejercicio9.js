// Escribir un algoritmo que determine si un año es bisiesto.

function checkLeapYear(year) {
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("Exercise 9: It's a leap year");       
    } else {
        console.log("Exercise 9: Isn't a leap year");
    }
};

checkLeapYear(2016);
checkLeapYear(2017);