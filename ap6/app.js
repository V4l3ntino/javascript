// Ejercicio 6. Crea un programa anterior para que se obtenga el número de un campo input.

const handleSubmit = (event) => {
    event.preventDefault(); 
    const numero = document.getElementById('numero').value;
    console.log("El número ingresado es:", numero);
}
