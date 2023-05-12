const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0;

//  Variável de controle = (let i = 0)


for (let i = 0; i < notas.length; i++) {

// Vai somar todos os valores do array iniciando na posição 0 que nesse caso é 10 até o final do array e
// vai ser armazenado esse valor na variável (somaDasNotas).

    somaDasNotas += notas[0]


    
}

const media = somaDasNotas / notas.length;


console.log(`A soma das suas notas é ${somaDasNotas} então sua média é ${media}.`);