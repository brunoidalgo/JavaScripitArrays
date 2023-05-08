
const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

nomes.splice(1, 2, "Rodrigo"); // Remove os dados das posições 1 e 2 e substitui pelo 3 dado informado que nesse caso é "Rodrigo"
// nomes.push("Rodrigo"); // Esse método adicionaria o nome "Rodrigo" em ultimo lugar na lista sem substituir ninguém , então somaria.

console.log(nomes);