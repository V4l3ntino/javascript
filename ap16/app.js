// Ejercicio 16. Convertir grados Celsius a Fahrenheit
// Escribe una función que convierta grados Celsius a Fahrenheit. La fórmula es:
// Fahrenheit = (Celsius * 9/5) + 32

const handleSubmit = (event) => {
    event.preventDefault();
    const celsius = document.getElementById("numero").value
    document.getElementById("result").value = conversor(celsius);
}

function conversor(num) {
    Fahrenheit = (num * 9/5) + 32
    return Fahrenheit; 
}