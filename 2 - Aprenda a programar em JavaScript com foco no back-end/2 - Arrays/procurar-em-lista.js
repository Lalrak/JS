const alunos = ["João", "Juliana", "Caio", "Ana"];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeNota(aluno) {
  if (lista[0].includes(aluno)) {
    const indice = lista[0].indexOf(aluno);
    const media = lista[1][indice];
    console.log(`Aluno: ${aluno}. Nota: ${media}`);
  } else {
    console.log("Estudante nao encontrado");
  }
}

exibeNomeNota("Juliana");
exibeNomeNota("Vini");
