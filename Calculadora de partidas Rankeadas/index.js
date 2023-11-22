//Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador, depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)
//Se vitórias for menor do que 10 = Ferro - Se vitórias for entre 11 e 20 = Bronze - Se vitórias for entre 21 e 50 = Prata - Se vitórias for entre 51 e 80 = Ouro - Se vitórias for entre 81 e 90 = Diamante - Se vitórias for entre 91 e 100= Lendário - Se vitórias for maior ou igual a 101 = Imortal
//## Saída: Ao final deve se exibir uma mensagem: "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

//Classificador de Nível de Herói
//Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo: Se XP for menor do que 1.000 = Ferro - Se XP for entre 1.001 e 2.000 = Bronze -  Se XP for entre 2.001 e 5.000 = Prata - Se XP for entre 6.001 e 7.000 = Ouro - Se XP for entre 7.001 e 8.000 = Platina - Se XP for entre 8.001 e 9.000 = Ascendente - Se XP for entre 9.001 e 10.000= Imortal - Se XP for maior ou igual a 10.001 = Radiante
//Ao final deve se exibir uma mensagem: "O Herói de nome **{nome}** está no nível de **{nivel}**"

function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;

    if (vitorias < 10) {
        return "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        return "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        return "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        return "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        return "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

let vitorias = 75;
let derrotas = 20;

let nivel = calcularNivel(vitorias, derrotas);

console.log(`O Herói tem o saldo de ${vitorias - derrotas} entre vitórias e derrotas e está no nível ${nivel}`);
