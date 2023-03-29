const numeros = [43, 50, 65, 12];

// const soma = numeros.reduce((acum, atual) => atual + acum, 0);

// console.log(soma); //170

// const soma = numeros.reduce(function (acum, atual) {
//   return atual + acum;
// }, 0);

// console.log(soma);

// Vendo o código acima, percebe-se melhor onde começam e terminam
// cada um dos parâmetros do reduce(): O primeiro parâmetro, uma função e o segundo, um número.

function operacaoNumerica(acum, atual) {
  return atual + acum;
}

const soma = numeros.reduce(operacaoNumerica, 0);

console.log(soma);

// Uma terceira forma de reescrever seria escrevendo a função callback fora do reduce():