/*Ao implementarmos a estrutura de dados Pilha, vamos criar uma Classe chamada Stack, 
que é uma Classe que modela e implementa a estrutura de dados Pilha, porque o 
TypeScript/JavaScript não possui uma implementação nativa ou uma Collection */
import { Stack } from "./Stack";

const leia = require("readline-sync");

/*Para criar uma nova fila, utilizaremos o construtor: const pilha = new Stack<T>(); 
O construtor sem argumento padrão cria um Objeto da Classe Stack novo e vazio.

O item <T> representa um Generic. Ele é utilizado para definir o tipo de dado que será 
armazenado na Pilha. O Tipo de dado pode ser um Primitivo ou um Objeto, que pode ser de 
uma Classe criada pela pessoa desenvolvedora.*/
const pilha = new Stack<string>();

let opcao: number;

while (true) {

console.log("*************************************************");
console.log("\n       1 - Adicionar Livro na Pilha            ");
console.log("\n       2 - Listar todos os Livros              ");
console.log("\n       3 - Retirar Livro da Pilha              ");
console.log("\n       0 - Sair                                ");
console.log("*************************************************");

opcao = leia.questionInt("Entre com a opcao desejada: ");

if (opcao == 0) {
    console.log("\nPrograma Finalizado!");
    process.exit(0);
  }

    switch(opcao) {

    case 1:
        let nomeLivro = leia.question("Digite o nome:");
        pilha.push(nomeLivro);
        console.log("\nPilha: ");
        pilha.printStack();
        console.log("\nLivro adicionado!");
        break;

    case 2:
        console.log("Lista de Livros na Pilha:");
        pilha.printStack();
        break;
    
    case 3:
        console.log("\nPilha: ")
        pilha.pop();
        pilha.printStack();
        console.log("\nUm livro foi retirado da pilha!");
        break;
    }
}