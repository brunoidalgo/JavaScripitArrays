const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const alunosEMedias = [alunos, medias];

const ana = `A média da aluna Ana é: ${alunosEMedias[1][2]} `

console.log(`O aluno: ${alunosEMedias[0][0]} tem a média de: ${alunosEMedias[1][0]}`)
console.log(`A aluna: ${alunosEMedias[0][1]} tem a média de: ${alunosEMedias[1][1]}`)
console.log(`O aluno: ${alunosEMedias[0][3]} tem a média de: ${alunosEMedias[1][3]}`)
console.log(`A aluna: ${alunosEMedias[0][2]} tem a média de: ${alunosEMedias[1][2]}`)

console.log(ana)