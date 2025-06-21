// acessarObjetoAninhado.js

// Array de objetos representando departamentos
const departamentos = [
  {
    id: 1,
    nome: "Vendas",
    funcionarios: [
      { id: 101, nome: "Ana", cargo: "Vendedor" },
      { id: 102, nome: "Carlos", cargo: "Gerente de vendas" },
    ],
  },
  {
    id: 2,
    nome: "TI",
    funcionarios: [
      { id: 201, nome: "Maria", cargo: "Desenvolvedor" },
      { id: 202, nome: "João", cargo: "Analista de sistemas" },
    ],
  },
];

// Função para encontrar um funcionário por ID em qualquer departamento
function encontrarFuncionarioPorId(id) {
  for (const departamento of departamentos) {
    const funcionarioEncontrado = departamento.funcionarios.find(
      (funcionario) => funcionario.id === id
    );
    if (funcionarioEncontrado) {
      return funcionarioEncontrado;
    }
  }
  return null;
}

// Encontra um funcionário com ID existente e imprime no console
const funcionarioEncontrado1 = encontrarFuncionarioPorId(201);
console.log("Funcionário encontrado (ID 201):");
console.log(funcionarioEncontrado1);

// Encontra um funcionário com ID inexistente e imprime no console
const funcionarioEncontrado2 = encontrarFuncionarioPorId(103);
console.log("\nFuncionário encontrado (ID 103):");
console.log(funcionarioEncontrado2);
