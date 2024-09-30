// Ejercicio 7. Contar vocales en una palabra
// Escribe una función que reciba una palabra y cuente cuántas vocales tiene.  
// Usa un bucle for y la función includes() para verificar si un carácter es una vocal.

const palabra = prompt("Introduce una palabra");
let contador = 0;
let regex = /[aeiou]/i; 

for (let i = 0; i < palabra.length; i++) {
    if (palabra[i].match(regex)) {
        contador++;
    }
}

console.log("La palabra tiene " + contador + " vocales.");
