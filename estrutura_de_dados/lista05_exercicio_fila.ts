//import { questionInt } from "readline-sync"; -> puxa somente o método questionInt da biblioteca readline-sync
import { Queue } from "../interface/Queue"
const leia = require("readline-sync"); //puxa "toda" a biblioteca readline-sync e suas configurações
const cliente = new Queue<string>();

let opcao : number = 4;

console.log("*************************************************");
console.log("\n 1 - Adicionar Cliente na Fila");
console.log("\n 2 - Listar todos os Clientes ");
console.log("\n 3 - Retirar Clientes da Fila ");
console.log("\n 0 - Sair");
console.log("*************************************************");


for (; opcao != 0; ){

    opcao = leia.questionInt("Entre com a opcao desejada: ");

    switch(opcao){
    case 1:
        let nomedocliente = leia.question("\nDigite o nome do Cliente: ");
        cliente.enqueue(nomedocliente);
        console.log("\nCliente Adicionado!");
        break;
    case 2:
        console.log("\nEstes são os Clientes na fila:");
        cliente.printQueue();
        break;
    case 3:
        console.log("\nO Cliente foi chamado! "+ cliente.dequeue());
        console.log("\nA fila atualizada é: ");
        cliente.printQueue();
        break;
}
}
        // console.log("Programa Finalizado!");
        // break;
