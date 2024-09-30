// Ejercicio 11. Escribe un programa que genere 100 números del 1 al 20. Debe mostrar la cuenta de los
// números que al menos han aparecido una vez.

const listaNumerosRandoms = Array.from({ length: 100 }, () => Math.round(Math.random() * 20));

for(let item of listaNumerosRandoms){
    console.log(item)
}