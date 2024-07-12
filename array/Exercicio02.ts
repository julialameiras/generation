import readlinesync = require("readline-sync");
const numeros: Array<number> = new Array<number>(2, 5, 1, 3, 4, 9, 7, 8, 10, 6); 
//No array não se usa colchetes entre os parenteses, somente no set!!!

let numero: number = readlinesync.questionInt("Digite o numero que voce deseja encontrar: ");

if ((numeros.indexOf(numero)) == -1) { //dentro do parenteses tem o parametro que o index.of precisa para achar o item que quero procurar
     console.log("\nO numero nao foi encontrado!");
   } else { //concatenaçao "" x interpolação ``
     console.log(`\nO numero ${numero} esta localizado na posicao: ${numeros.indexOf(numero)}`);
   }
        

