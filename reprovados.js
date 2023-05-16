const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((_, indice) => { // Ao invés de nomear o primeiro parametro colocar um (_) 
                                                  //underline assim o js já vai entender que quer utilizar o primeiro parametro.
    return medias[indice] < 7 ? true : false; // O método de array filter() vai exibir um resultado, esse pode ser true or false.
});

console.log(reprovados);
