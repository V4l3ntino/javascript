// Ejercicio 11. Escribe un programa que genere 100 números del 1 al 20. Debe mostrar la cuenta de los
// números que al menos han aparecido una vez.

const listaNumerosRandoms = Array.from({ length: 10 }, () => Math.round(Math.random() * 9)+1);
let listavacia = Array.from({length: 10}).fill(0)

let nuevolista = new Array(20).fill(0)

for (let item of listaNumerosRandoms){
    listavacia[item-1]++;
}

console.log(listaNumerosRandoms)
count = 1;
for(let value of listavacia){
    console.log(`Numero ${count} -> ${value}`)
    count++;
}
