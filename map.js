// Alterando notas com método Map();

const notas = [10, 9.5, 8, 7]

// Agora vamos adicionar um ponto em cada nota, mas sem passar do (10) que é o limte.

const notasAtualizadas = notas.map((nota) => nota + 1 >= 10 ? 10 : nota + 1);

console.log(notasAtualizadas);