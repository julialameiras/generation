import leia = require("readline-sync"); 

const numeros: Set<number> = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6,]);

let elemento : number = leia.questionInt("Digite o numero que voce deseja encontrar: ");

if ((numeros.has(elemento)) == true) {
  console.log(`\nO numero ${elemento} foi encontrado!`); 
} else {
  console.log(`\nO numero ${elemento} nao foi encontrado!`);
}