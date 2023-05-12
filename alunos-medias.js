const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const sala = [alunos, medias];

const reprovados = sala.filter((aluno, indice) => {
    return sala[0][0];
});

console.log(reprovados);