// Ejercicio 9. Revertir una cadena
// Escribe una función que tome una cadena como argumento y devuelva la cadena invertida.


const handleSubmit = (event) => {
    event.preventDefault()
    const text = document.getElementById("palabra").value.split("")
    let reverText = "";
    for(i=text.length-1; i>=0; i--){
        reverText += text[i]
    }
    document.getElementById("palabra").value = reverText;
}