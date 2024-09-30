// Ejercicio 15. Encontrar los números primos en un rango
// Escribe un programa que imprima todos los números primos entre 1 y un número dado por el usuario.
// Crea un función llamada esPrimo(num) que reciba num, un número entero

const handleSubmit = (event) => {
    event.preventDefault();
    const numero = document.getElementById("numero").value
    lista = []
    for(i=1; i<=numero; i++){
        if(esPrimo(i) == false) continue
        lista = [...lista, i]
    }
    let result = document.getElementById("result")
    count = 0
    result.deleteRow(0);
    result.insertRow();
    let rows = result.rows;

    for(item of lista){
        let celda = rows[0].insertCell(count)
        celda.innerHTML = item;
        count++;
    }
}

function esPrimo(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; 
    }
    return true; 
}