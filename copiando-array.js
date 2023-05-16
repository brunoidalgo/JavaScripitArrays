const notas = [7, 7, 8, 9];

let novasNotas = [...notas, 10]; // Esse comando irá adicionar o valor [10] ao array notas sem alterar o original.
novasNotas = [10, ...notas]; //Aqui o valor [10] irá ser adiconado no começo do array sem alterar o original.

novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);

const nomes = ["Bruno", "Jéssica"];

let novosNomes = ["Paulo", ...nomes, "Claudia"]

// spread operator [...]

console.log(`Esses são os nomes originais ${nomes}`);

console.log(`Esses são os nomes alterados ${novosNomes}`);