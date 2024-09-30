// Ejercicio 12. Filtrar números pares de un array
// Crea una función que tome un array de números y devuelva un nuevo array con solo los números pares.Usa
// filter() y el operador %

const listaNumerosRandoms = Array.from({ length: 100 }, () => Math.round(Math.random() * 20));
const listaFiltrada = listaNumerosRandoms.filter(item => item % 2 === 0);


for(let item of listaFiltrada){
    console.log(item)
}