// Uma forma melhor para percorrer um array do ínicio ao fim.

const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0;

for (let nota of notas) {
    
    somaDasNotas += nota;

}

const media = somaDasNotas / notas.length;

console.log(`A sua média é ${media}.`)