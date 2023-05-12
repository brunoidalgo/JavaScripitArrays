const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0;

notas.forEach(function(nota) {
    somaDasNotas += nota;
});

// Callback = chamar de volta


const media = somaDasNotas / notas.length;

console.log(`A sua média é ${media}.`)