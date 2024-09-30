// Ejercicio 21. Filtrar números mayores que un valor
// Escribe una función que tome un array de números y un valor, y devuelva un nuevo array con los números
// que son mayores que ese valor.
// Usa filter() para crear el nuevo array

const valor = Math.round(Math.random() * 10);
let lista = Array.from({length: 10}, () => Math.round(Math.random()*10))

console.log("Lista inicialmente",lista)


console.log("Contar a partir de ",valor)
console.log("Lista resulatnte >", funcion(valor, lista))


function funcion (valor, lista){
    lista = lista.filter(item => item > valor)
    return lista

}