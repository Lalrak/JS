const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['551199999998', '551199999993'],
  enderecos: [
    {
      rua: 'Rua Joseph Climber',
      numero: '45',
      complemento: 'apto 43',
    },
    {
      rua: 'Rua Dona Clotilde',
      numero: '71',
      complemento: null,
    },
  ],
};

const chavesObj = Object.keys(estudante);
const valoresObj = Object.values(estudante);
const entradasObj = Object.entries(estudante);
console.log(chavesObj);

if (!chavesObj.includes('enderecos')) {
  console.error('não possui endereço');
}

const objetoOriginal = { a: 1, b: 2 };
const objetoParaCopiar = { b: 3, c: 4 };

const objetoFusionado = Object.assign({}, objetoOriginal, objetoParaCopiar);

console.log(objetoFusionado);
