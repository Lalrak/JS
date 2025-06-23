import User from "./User.js";

export default class Docente extends User {
  constructor(nome, email, nascimento, role = "docente", ativo) {
    super(nome, email, nascimento, role, ativo);
  }
  aprovarEstudante(estudante, cruso) {
    return `estudante ${estudante} passou no curso de ${cruso}, reponsável ${this.nome}`;
  }
  reprovarEstudante() {}
}
