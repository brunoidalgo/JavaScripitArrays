const anoLetivo = [[10, 5, 9, 4], [10, 5, 7, 8], [10, 8, 9, 10], [10, 5, 6.8, 7.9]];
const aluno = "Bruno"

let somaDasNotas = 0;

function nota () {for (let i = 0; i < anoLetivo.length; i++) {
    for (let j = 0; j < anoLetivo.length; j++ ) {
        somaDasNotas += anoLetivo[i][j];
    }
}
const media = somaDasNotas / anoLetivo.length;

 if (media < 24) {
    console.log(`${aluno} não passou de ano, pois a sua média foi menor que 24, média: ${media}`)
 } else {
    console.log(`${aluno} passou de ano e dua media final é ${media}`)
 }
}


console.log(nota());