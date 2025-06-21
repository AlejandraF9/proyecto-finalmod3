/* 20 - Un reloj muestra:
-> la hora (0 <= h <= 23)
-> los minutos (0 <= m <= 59)
-> y los segundos (0 <= s <= 59).

Escribe una funcion que calcule los millisegundos que han pasado desde media noche 00:00:00 hasta la hora actual teniendo en cuenta que:
– Hay 1000 millisegundos en un segundo
– Podemos obtener la hora, minutos y segundos con la función "getTime" */

function calculateMilliseconds(hour, minute, second) {
    if (hour >= 0 && hour <= 24 && minute >= 0 && minute <= 59 && second >= 0 && second <= 59) {
        const millisecondsInHour = hour * 60 * 60 * 1000;
        const millisecondsInMinute = minute * 60 * 1000;
        const millisecondsInSecond = second * 1000;

        return millisecondsInHour + millisecondsInMinute + millisecondsInSecond;
    } else {
        return "Hours, minutes and seconds must be valid numbers."
    }
    
}

console.log(`Exercise 20: ${calculateMilliseconds(0, 0, 5)} have passed since midnight`);
console.log(`Exercise 20: ${calculateMilliseconds(23, 59, 59)} have passed since midnight`);
console.log("Exercise 20:", calculateMilliseconds(25, 62, 59));