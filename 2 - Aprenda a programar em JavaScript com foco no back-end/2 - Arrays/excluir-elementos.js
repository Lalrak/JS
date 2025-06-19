const notas = [10, 6, 8, 5.5, 10];

notas.pop();

const media = (notas) => {
  let soma = 0;
  for (let index = 0; index < notas.length; index++) {
    soma += notas[index];
  }
  return soma / notas.length;
};

console.log(media(notas).toFixed(2));