const listaPessoas = [
  { nome: 'João', idade: 30, cidade: 'São Paulo' },
  { nome: 'Maria', idade: 25, cidade: 'Rio de Janeiro' },
  { nome: 'Carlos', idade: 35, cidade: 'Belo Horizonte' },
];

function mostrarListaPessoas(pessoas) {
  console.log('Lista de Pessoas:');
  pessoas.forEach((pessoa) => {
    console.log(
      `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`
    );
  });
}

function filtrarPorCidade(pessoas, cidade) {
  return pessoas.filter((pessoa) => pessoa.cidade === cidade);
}

// Chamada da função mostrarListaPessoas
mostrarListaPessoas(listaPessoas);

// Adição de uma nova pessoa à lista
listaPessoas.push({ nome: 'Ana', idade: 28, cidade: 'Salvador' });

// Chamada da função mostrarListaPessoas após a adição
mostrarListaPessoas(listaPessoas);

// Chamada da função filtrarPorCidade
const pessoasSalvador = filtrarPorCidade(listaPessoas, 'Salvador');
console.log('Pessoas em Salvador:');
console.log(pessoasSalvador);
