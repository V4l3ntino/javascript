// Ejercicio 4. Escribe un programa que pida al usuario ingresar dos números y luego muestre la suma. Usa prompt() para pedir datos al usuario y Number() para convertir las entradas a números. 
// Usa console.log() para mostrar el resultado

const n1 = prompt("Introduce el el primer número")
const n2 = prompt("Introduce el segundo número")

const result = (+n1) + (+n2)

console.log("El resultado es ",result)