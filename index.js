const prompt = require("prompt-sync")();
const { adicionarAtividade, listarAtividades, encontrarAtividade, excluirAtividade } = require("./atividades_por_dia");

const atividades = [];

console.log("Bem vindo aluno!!");

let opcao;

while (opcao !== 0) {
    console.log(`
        1- Escreva suas atividades durante as férias
        2- Listar o que você adicionou até agora 
        3- Achar o que foi feito em um dia específico
        4- Excluir algum dia 
        0- Sair
    `);

    opcao = prompt("Digite o que deseja fazer: ");
    
    if (isNaN(Number(opcao))) {
        console.log("Digite um NÚMERO");
        continue;
    } 
    
    opcao = Number(opcao);

    switch (opcao) {
        case 1:
            adicionarAtividade(atividades, prompt);
            break;

        case 2:
            listarAtividades(atividades);
            break;

        case 3:
            encontrarAtividade(atividades, prompt);
            break;

        case 4:
            excluirAtividade(atividades, prompt);
            break;

        case 0:
            console.log("Saindo do programa.");
            break;

        default:
            console.log("Opção inválida.");
            break;
    }
}