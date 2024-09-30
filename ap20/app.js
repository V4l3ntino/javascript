// Ejercicio 20. Convertir una cadena a mayúsculas y minúsculas
// Escribe una función que convierta una cadena de texto a mayúsculas y luego a minúsculas, mostrando
// ambos resultados.
// Usa los métodos toUpperCase() y toLowerCase()

const handleSubmit = (event) => {
    event.preventDefault();
    const input = document.getElementById("input").value
    const lowercase = input.toLowerCase()
    const uppercase = input.toUpperCase()
    document.getElementById("minus").value = lowercase;
    document.getElementById("mayus").value = uppercase;
}