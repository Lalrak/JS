import fs from "fs";
import trataErros from "./erro/funcoesErro.js";
import { contaPalavras } from "./index.js";
import { montaSaidaArquivo } from "./helpers.js";

const caminhoArquivo = process.argv;
const link =
  "2 - Aprenda a programar em JavaScript com foco no back-end/4 - NodeJS - Lib/arquivos/texto-web.txt"; //caminhoArquivo[2]
const endereco =
  "2 - Aprenda a programar em JavaScript com foco no back-end/4 - NodeJS - Lib/resultados";

fs.readFile(link, "utf-8", (erro, texto) => {
  try {
    if (erro) throw erro;
    const resultado = contaPalavras(texto);
    criaESalvaArquivo(resultado, endereco);
  } catch (erro) {
    trataErros(erro);
  }
});

async function criaESalvaArquivo(listaPalavras, endereco) {
  const arquivoNovo = `${endereco}/resultado.txt`;
  const textoPalavras = montaSaidaArquivo(listaPalavras);
  try {
    await fs.promises.writeFile(arquivoNovo, textoPalavras);
    console.log("Arquivo criado com sucesso");
  } catch (erro) {
    throw erro;
  }
}

// function criaESalvaArquivo(listaPalavras, endereco) {
//   const arquivoNovo = `${endereco}/resultado.txt`;
//   const textoPalavras = JSON.stringify(listaPalavras);

//   fs.promises
//     .writeFile(arquivoNovo, textoPalavras)
//     .then(() => {
//       console.log("Arquivo criado com sucesso");
//     })
//     .catch((erro) => {
//       throw erro;
//     })
//     .finally(() => {
//       console.log("Processo finalizado");
//     });
// }
