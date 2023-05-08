const nomes = ["Ana", "Juliana", "Leonardo"];
const idades = [30, 35, 28];
const faculdade = [false, true, true];

const funcionarios = [nomes, idades, faculdade];

console.log(`O funcionário : ${funcionarios[0][0]} tem a idade de: ${funcionarios[1][0]} faz faculdade: ${funcionarios[2][0]}`)