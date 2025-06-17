// Crear un programa que convierta grados Celsius a Fahrenheit y viceversa.

function convertDegrees(degree, type) {
    if(type === "celsius") {
       const fahrenheit = (degree * 9/5) + 32;
       console.log(`${degree}º Celsius = ${fahrenheit}º Fahrenheit`);
       
    } else if(type === "fahrenheit") {
       const celsius = (degree - 32) * 5/9;
       console.log(`${degree}º Fahrenheit = ${celsius}º Celsius`);

    } else {
       console.log("Error");
    }
}

convertDegrees(10, "celsius");
convertDegrees(68, "fahrenheit");