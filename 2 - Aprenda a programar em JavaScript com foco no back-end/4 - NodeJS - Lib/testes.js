const caminhos = [
  "./arquivos/texto-kanban.txt",
  "./arquivos/texto-web.txt",
  "./arquivos/texto-aprendizado.txt",
];

async function lerMultiplosArquivos(arrayDeCaminhos) {
  const arrayDePromessas = arrayDeCaminhos.map(
    async (caminho) => await fs.promises.readFile(caminho, "utf-8")
  );
  const conteudosDosArquivos = await Promise.all(arrayDePromessas);
  return conteudosDosArquivos;
}

lerMultiplosArquivos(caminhos);
