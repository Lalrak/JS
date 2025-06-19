const notas = [10, 6.5, 8, 7.5];

const media = (notas) => {
  let soma = 0;
  for (let index = 0; index < notas.length; index++) {
    soma += notas[index];
  }
  return soma / notas.length;
};

console.log(media(notas));