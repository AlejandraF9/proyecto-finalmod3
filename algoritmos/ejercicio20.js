/* 20 - Un reloj muestra:
-> la hora (0 <= h <= 23)
-> los minutos (0 <= m <= 59)
-> y los segundos (0 <= s <= 59).

Escribe una funcion que calcule los millisegundos que han pasado desde media noche 00:00:00 hasta la hora actual teniendo en cuenta que:
– Hay 1000 millisegundos en un segundo
– Podemos obtener la hora, minutos y segundos con la función "getTime" */

function calculateMilliseconds(second, minute, hour) {
    const millisecondsInSecond = second * 1000;
    const millisecondsInMinute = minute * 60 * 1000;
    const millisecondsInHour = hour * 60 * 60 * 1000;

    return millisecondsInSecond + millisecondsInMinute + millisecondsInHour;
}

console.log(calculateMilliseconds(1, 1, 1));
console.log(calculateMilliseconds(20, 13, 5));