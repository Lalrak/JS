import fs from "fs";
import trataErros from "./erro/funcoesErro.js";
import { contaPalavras } from "./index.js";

const caminhoArquivo = process.argv;
const link =
  "2 - Aprenda a programar em JavaScript com foco no back-end/4 - NodeJS - Lib/arquivos/texto-web.txt"; //caminhoArquivo[2]

fs.readFile(link, "utf-8", (erro, texto) => {
  try {
    if (erro) throw erro;
    contaPalavras(texto);
  } catch (erro) {
    trataErros(erro);
  }
});
