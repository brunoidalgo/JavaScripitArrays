// Mais um pouco sobre for, mas agora com matrizes.

const primeiroSemestre = [10, 6.5, 8, 7.5];
const segundoSemestre = [9, 6, 6, 9];
const terceiroSemestre = [8.5, 9.5, 8.5, 10];
const quartoSemestre = [10, 5, 7, 8]

const aluno = "Bruno"

const notasGerais = [primeiroSemestre, segundoSemestre, terceiroSemestre, quartoSemestre];

let mediaAnual = 0;

for (let i = 0; i < notasGerais.length; i++) { // [i] representa o array notasGerais.
    for (let j = 0; j < notasGerais[i].length; j++) { // [j] representa o conteúdo de cada array dentro do array notasGerais
      mediaAnual += notasGerais[i][j]/notasGerais[i].length; // (primeiroSemestre, segundoSemestre, terceiroSemestre, quartoSemestre).
    }
  }

// Incremento (++) e Decremento (--)

  function minhaNotas() {
    if(mediaAnual >= 24) {
        console.log(`${aluno} passou de ano pois sua média é ${mediaAnual}`)
      } else {
        console.log(`${aluno} não passou de ano pois sua média é ${mediaAnual}`)
      }
  }

  minhaNotas();
  