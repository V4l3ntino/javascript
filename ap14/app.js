// Ejercicio 14. Verificar si una palabra es un palíndromo
// Escribe una función que verifique si una palabra es un palíndromo (es decir, si se lee igual al derecho y al
// revés).

const handleSubmit = (event) => {
    event.preventDefault();
    const palabra = document.getElementById("palabra").value
    lista = palabra.split("")
    let inverso = "";
    for(i=lista.length-1; i>=0; i--){
        inverso+=lista[i]
    }
    if(palabra.toLowerCase() !== inverso.toLowerCase()){
        document.getElementById("incorrect").style.display = "flex";
        document.getElementById("correct").style.display = "none";
        return;
    }
    document.getElementById("correct").style.display = "flex";
    document.getElementById("incorrect").style.display = "none";
}