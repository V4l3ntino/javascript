// Ejercicio 2. Declara un array de 100 números. Rellena el array con valores al azar.
// Muestra el contenido console.table. Realiza un filtrado de datos.
// Por ejemplo mostrando los valores de un determinado rango 



const listaNumber = Array.from({length: 100}, (_, index) => index+1).sort(()=> Math.random() - 0.5)
const listFiltered = listaNumber.filter((item) => {if ((item % 2) == 0) return item})

console.table(listFiltered)
console.table(listaNumber)