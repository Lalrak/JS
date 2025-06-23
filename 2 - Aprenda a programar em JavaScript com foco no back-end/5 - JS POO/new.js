function User(nome, email) {
  this.nome = nome;
  this.email = email;

  this.exibirInfos = function () {
    console.log(this.nome, this.email);
  };
}

const novoUser = new User("Juliana", "j@j.com");
novoUser.exibirInfos();
