const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// const meuSet = new Set(nomes); // (Set) Classe do Js. // Set remove as duplicatas.

const nomesAtualizados = [...new Set(nomes)];

// meuSet. (Existem métodos de Set como métodos de array. )

// console.log(meuSet); 
console.log(nomesAtualizados);

