// Ejercicio 13. Contar palabras en una frase
// Escribe un programa que cuente cuántas palabras tiene una frase ingresada por el usuario.
// Usa el método split() para dividir la frase en un array de palabras

const handleSubmit = (event) => {
    event.preventDefault();
    const palabra = document.getElementById("palabra").value
    lista = palabra.split("")
    document.getElementById("result").innerHTML = `La palabra tine ${lista.length} letras`
}