const alunos = ["João", "Juliana", "Caio", "Ana"];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeNota(aluno) {
  if (lista[0].includes(aluno)) {
    const [alunos, medias] = lista;
    const indice = alunos.indexOf(aluno);
    const media = medias[indice];
    console.log(`Aluno: ${aluno}. Nota: ${media}`);
  } else {
    console.log("Estudante nao encontrado");
  }
}

exibeNomeNota("Juliana");
exibeNomeNota("Vini");
