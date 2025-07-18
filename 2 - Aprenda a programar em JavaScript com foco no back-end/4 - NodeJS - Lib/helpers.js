function filtraOcorrencias(paragrafo) {
  return Object.keys(paragrafo).filter((palavra) => paragrafo[palavra] > 1);
}

function montaSaidaArquivo(listaPalavras) {
  let textoFinal = "";
  listaPalavras.forEach((paragrafo, indice) => {
    const duplicadas = filtraOcorrencias(paragrafo).join(", ");
    if (!duplicadas) return;
    textoFinal += `palavras duplicadas no parágrafo ${
      indice + 1
    }: ${duplicadas}\n`;
  });

  return textoFinal;
}

export { montaSaidaArquivo };
