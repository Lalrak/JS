const estudante = {
  nome: "João Ramos",
  idade: 32,
  cpf: "12312312312",
  turma: "JavaScript",
};

function exibeInfoEstudante(objEstudante, infoEstudante){
    return objEstudante[infoEstudante];    
}

console.log(exibeInfoEstudante(estudante, "turma"));