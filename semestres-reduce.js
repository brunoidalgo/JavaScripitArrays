const primeiroSemestre = [10, 10, 8, 9, 6, 8];
const segundoSemestre = [10, 9, 8, 7, 9, 7];
const terceiroSemestre = [8, 6, 7, 8, 9, 10];
const quartoSemestre = [7, 9, 10, 8, 7, 10];

// const alunos = [`Bruno`, `Jéssica`, `Gabriel`, `Eduardo`, `Fábio`, `Jairo`];

const sala = [primeiroSemestre, segundoSemestre, terceiroSemestre, quartoSemestre];

function calculaMedia(mediaAnual) {
    const somaDasNotas = mediaAnual.reduce((acc, nota) => acc + nota, 0 )

    const media = somaDasNotas / mediaAnual.length;

    return media;

}

console.log(`A média da sala é no primeiro semestre é ${calculaMedia(sala[0])}`);
console.log(`A média da sala é no segundo semestre é ${calculaMedia(sala[1])}`);
console.log(`A média da sala é no terceiro semestre é ${calculaMedia(sala[2])}`);
console.log(`A média da sala é no quarto semestre é ${calculaMedia(sala[3])}`);



