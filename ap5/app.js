// Ejercicio 5. Crea un programa que verifique si un número ingresado por el usuario es par o impar.

let value = prompt("Ingresa un número")

value = +value


if ((value % 2) == 0){
    window.alert("El número es par")
}else {
    window.alert("El número es Impar")
}