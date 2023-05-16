const numeros = [43, 50, 65, 12]

const soma = numeros.reduce((acc, atual) => acc + atual, 0)

console.log(soma) //170


const somaComChaves = numeros.reduce(function (acc, atual) {
    return atual + acc
   }, 0)


   function operacaoNumerica(acc, atual) {
    return atual + acc
   }
   
   const somaCallBack = numeros.reduce(operacaoNumerica, 0)