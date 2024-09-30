// Ejercicio 19. Calcular el promedio de un array de números. Escribe una función que reciba un array de
// números y calcule su promedio.
// Usa reduce() para sumar todos los números y luego divide entre la longitud del array.

const lista = Array.from({length: Math.round(Math.random()*100)}, () => Math.round(Math.random()/Math.random()*100))

console.log(lista)
const promedio = Math.floor((lista.reduce((ac, current) => ac + current))/lista.length)
console.info("Promiedio >",promedio)
