// Ejercicio 1. Declara variables de varios tipos. Muestra el contenido en la consola junto con el tipo de dato. 
// En este ejercicio utiliza el console.log, console.error, console.info y el console.debug

const numero = 2;
const string = "hola";
const booleano = false;
const indefinido = undefined;;
let objeto = { nombre: "Juan", edad: 30 };

console.log(numero, typeof numero);
console.info(string, typeof string);
console.warn("Objeto:", objeto, "| Tipo:", typeof objeto);
console.error("Error > ", indefinido, typeof indefinido);
console.debug("Object", objeto, typeof objeto);
