const prompt = require("prompt-sync")();

function adicionarAtividade(atividades, prompt) {
    let dias = prompt("Digite o dia da atividade: ");
    if (!isNaN(Number(dias)) && Number(dias) > 0 && Number(dias) <= 30) {
        let ativ = prompt("Digite o que você fez nesse dia: ");
        let diario = {
            dia: dias,
            atividades_diarias: [ativ]
        };
        
        let pergunta;
        do {
            pergunta = prompt("Você deseja adicionar outra atividade nesse dia? [s/n]: ");
            if (pergunta.toLowerCase() === 's') {
                ativ = prompt("Digite outra atividade que você fez nesse dia: ");
                diario.atividades_diarias.push(ativ);
            }
        } while (pergunta.toLowerCase() === 's');
        
        atividades.push(diario);
    } else {
        console.log("O mês só tem 30 dias.");
    }
}

function listarAtividades(atividades) {
    if (atividades.length === 0) {
        console.log("Nenhuma atividade adicionada ainda.");
    } else {
        atividades.forEach((diario) => {
            console.log("Dia: " + diario.dia);
            diario.atividades_diarias.forEach((atividade, index) => {
                console.log("  Atividade " + (index + 1) + ": " + atividade);
            });
        });
    }
}

function encontrarAtividade(atividades, prompt) {
    let dias = prompt("Digite o dia que deseja encontrar: ");
    if (!isNaN(Number(dias))) {
        let diaEncontrado = false;
        atividades.forEach((diario) => {
            if (diario.dia === dias) {
                diaEncontrado = true;
                console.log("Atividades do dia " + dias + ":");
                diario.atividades_diarias.forEach((atividade, index) => {
                    console.log("  Atividade " + (index + 1) + ": " + atividade);
                });
            }
        });
        if (!diaEncontrado) {
            console.log("Dia não encontrado.");
        }
    } else {
        console.log("Digite um NÚMERO para o dia.");
    }
}

function excluirAtividade(atividades, prompt) {
    let dias = prompt("Digite o dia da atividade a ser excluída: ");
    if (!isNaN(Number(dias))) {
        let diaEncontrado = false;
        atividades.forEach((diario, index) => {
            if (diario.dia === dias) {
                atividades.splice(index, 1);
                diaEncontrado = true;
                console.log("Atividade do dia " + dias + " foi apagada.");
            }
        });
        if (!diaEncontrado) {
            console.log("Dia não encontrado.");
        }
    } else {
        console.log("Digite um NÚMERO para o dia.");
    }
}

module.exports = {
    adicionarAtividade,
    listarAtividades,
    encontrarAtividade,
    excluirAtividade
};
