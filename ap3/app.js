// Ejercicio 3.
//  Declara un objeto persona con las propiedades más habituales, usando todos los tipos de datos incluidos un array y otro objeto.
//  Muestra el contenido usando console.log y console.table

const persona = {
    nombre: "ana",
    edad: 39,
    listaCompra: [['Aguacate', 2], ['Melocoton',5], ['Mayonesa', 5]],
    metadata: {
        codigoPostal: 2493,
        calle: "Ave del paraiso",
        piso: 8
    }
}
console.log(persona)
console.table(persona)