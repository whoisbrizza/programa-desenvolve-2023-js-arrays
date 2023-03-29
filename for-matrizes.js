// Agora, se quisermos percorrer matrizes, um único for não será suficiente. 
// Mas podemos usar o for várias vezes, uma para cada dimensão da matriz. 
// Assim, uma matriz de duas dimensões usará dois for, um dentro do outro.
// Com isso usamos o for para passar por todos os elementos da matriz, 
// e nesse caso, calcular a média dos valores deles.

const notas1 = [10, 6.5, 8, 7.5];
const notas2 = [9, 6, 6];
const notas3 = [8.5, 9.5];

const notasGerais = [notas1, notas2, notas3];

let media = 0;

for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media += notasGerais[i][j] / notasGerais[i].length;
  }
}

media = media / notasGerais.length;

console.log(media);
