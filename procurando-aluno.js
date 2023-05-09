const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const alunosEMedias = [alunos, medias];

function exibeNomeENota (aluno) {
    if(alunosEMedias[0].includes(aluno)) { // Includes verifica se o valor passado está no array

        // const medias = alunosEMedias[1];
        // const alunos = alunosEMedias[0];

        const [alunos, medias] = alunosEMedias; // Reunir duas variáeveis em uma só.

        const indice = alunos.indexOf(aluno); // Retorna o indice passado ao parametro.

        const mediaAluno = medias[indice];

        console.log(`${aluno} tem a média de ${mediaAluno}.`);
    } else {
        console.log(`Aluno não cadatrado!`);
    }
    
}

exibeNomeENota(`João`);


// console.log(`O Aluno ${alunosEMedias[0][0]} tem a nota: ${alunosEMedias[1][0]}`)