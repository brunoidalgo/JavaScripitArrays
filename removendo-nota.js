// Remover valores do array

const notas = [10, 5, 6, 8, 9];

notas.pop();

console.log(notas);

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(`Sua média é: ${media}`);