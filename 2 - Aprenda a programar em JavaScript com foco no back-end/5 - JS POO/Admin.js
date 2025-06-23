import User from "./User.js";

export default class Admin extends User {
  constructor(nome, email, nascimento, role = "admin", ativo) {
    super(nome, email, nascimento, role, ativo);
  }
  criarCurso(nome, qtdVagas) {
    return `curso ${nome} criado com ${qtdVagas} vagas`;
  }
  excluirCurso() {}
  desativarPerfil() {}
}
