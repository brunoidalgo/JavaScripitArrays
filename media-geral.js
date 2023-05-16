const salaJs = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

// Método Reduce() reduz a lista (array) em um unico valor, no caso de números ele soma.

function calculaMedia(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acc, nota) => acc + nota, 0);
        
    
        const media = somaDasNotas / notasDaSala.length;

        return media;
};

console.log(`A média da sala JavaScript é ${calculaMedia(salaJs)}`);
console.log(`A média da sala Python é ${calculaMedia(salaPython)}`);