const numeros = [100, 200, 300, 400, 500, 600];

// Declaramos o valor inicial da variável de controle como o valor da última posição do array (numeros.length - 1); 
// realizamos um decremento (i--) ao invés de um incremento e a condição de execução é i >= 0. 
// Ou seja, nesse caso, a variável i começará do valor 5 e irá até 0.

for (let i = numeros.length - 1; i >= 0; i--) {
  console.log(numeros[i]);
}

// Outra possibilidade é alterar a quantidade incrementada ou decrementada, utilizando o mesmo código acima, 
// mas alterando o decremento para i -= 2. Então, teremos o seguinte:


console.log(`-------------------`)
const numerosDois = [100, 200, 300, 400, 500, 600];

for (let i = numerosDois.length - 1; i >= 0; i -= 2) {
  console.log(numerosDois[i]);
}


// Também temos controle sobre a condição de execução, então se alterarmos esse último 
// código para ter a condição numeros[i] > 300, teremos o seguinte:


console.log(`-------------------`)
const numerosTres = [100, 200, 300, 400, 500, 600];

for (let i = numerosTres.length - 1; numerosTres[i] >= 300; i -= 2) {
  console.log(numerosTres[i]);
}

// Essa estrutura irá criar um array desde 0 a 100.

const numerosPares = [];

for (let i = 0; i <= 100; i += 2) {
  numerosPares.push(i);
}

console.log(numerosPares);