// Ejercicio 17. Ordenar un array de números
// Escribe un programa que tome un array de números y lo ordene de menor a mayor.
// Usa el método sort() con una función de comparación.


const listaOrdenada = Array.from({length:100}, (_, index) => index+1).sort(() => Math.random() - 0.5)
let listaDesOrdenada = [...listaOrdenada];
listaDesOrdenada = listaDesOrdenada.sort((a, b) => a - b);
console.log(listaOrdenada)
console.log(listaDesOrdenada)