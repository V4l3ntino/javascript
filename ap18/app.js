// Ejercicio 18. Encontrar la palabra más larga en una frase. Escribe una función que encuentre la palabra
// más larga en una frase ingresada por el usuario.
// Usa split() para dividir la frase en palabras, luego recorre el array con un bucle para encontrar la palabra
// más larga
const handleSubmit = (event) =>{
    event.preventDefault();
    const frase = document.getElementById("frase").value
    lista = frase.split(" ");
    aux = 0;
    palabra = "";
    lista.map((item) => {
        if (item.split("").length > aux){
            aux = item.split("").length;
            palabra = item;
        }
    })

    document.getElementById("result").innerHTML = `La palabra con más letras es ${palabra}`
}