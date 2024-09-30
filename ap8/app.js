// Ejercicio 8. Escribe una función que permita generar un número aleatorio entero entre un intervalo. Por ejemplo azar(-5, 10). Salida: 3



const handleSubmit = (event) => {
    event.preventDefault();
    const value = Math.round(Math.random() * 15 - 5);
    document.getElementById("numero").value = value
}