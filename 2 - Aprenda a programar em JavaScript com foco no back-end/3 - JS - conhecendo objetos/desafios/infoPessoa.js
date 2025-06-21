const pessoa = {
  nome: 'Ana',
  idade: 25,
  solteiro: true,
  hobbies: ['Leitura', 'Caminhada', 'Fotografia'],
  endereco: {
    rua: 'Rua Principal',
    cidade: 'Cidade Feliz',
    estado: 'Estado Alegre',
  },
};

function mostrarInfoPessoa(pessoa) {
  console.log('Informações da Pessoa:');
  console.log(`Nome: ${pessoa.nome} (Tipo: ${typeof pessoa.nome})`);
  console.log(`Idade: ${pessoa.idade} anos (Tipo: ${typeof pessoa.idade})`);
  console.log(`Solteiro: ${pessoa.solteiro} (Tipo: ${typeof pessoa.solteiro})`);
  console.log(
    `Hobbies: ${pessoa.hobbies.join(', ')} (Tipo: ${typeof pessoa.hobbies})`
  );
  console.log('Endereço:');
  console.log(`Rua: ${pessoa.endereco.rua}`);
  console.log(`Cidade: ${pessoa.endereco.cidade}`);
  console.log(`Estado: ${pessoa.endereco.estado}`);
}

// Chamada da função mostrarInfoPessoa
mostrarInfoPessoa(pessoa);
