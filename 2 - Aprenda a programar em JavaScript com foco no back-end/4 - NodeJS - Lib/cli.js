import fs from "fs";
import path from "path";
import trataErros from "./erro/funcoesErro.js";
import { contaPalavras } from "./index.js";
import { montaSaidaArquivo } from "./helpers.js";
import { Command } from "commander";

const program = new Command();

program
  .version("0.0.1")
  .option("-t, --texto <string>", "caminho do texto a ser processado")
  .option("-d, --destino <string>", "destino do arquivo resultado")
  .action((options) => {
    const { texto, destino } = options;
    if (!texto || !destino) {
      console.log("Erro: favor inserir caminho de origem e destino");
      program.help();
      return;
    }
    const caminhoTexto = path.resolve(texto);
    const caminhoDestino = path.resolve(destino);

    try {
      processaArquivo(caminhoTexto, caminhoDestino);
    } catch (error) {
      console.log("ocorreu um erro no processamento do arquivo");
    }
  });

function processaArquivo(texto, destino) {
  fs.readFile(texto, "utf-8", (erro, texto) => {
    try {
      if (erro) throw erro;
      const resultado = contaPalavras(texto);
      criaESalvaArquivo(resultado, destino);
    } catch (erro) {
      trataErros(erro);
    }
  });
}

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
