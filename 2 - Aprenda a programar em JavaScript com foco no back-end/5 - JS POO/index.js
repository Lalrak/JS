import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const user1 = new User("Juliana", "j@j.com", "2024-01-01");
const admin1 = new Admin("Rodrigo", "r@r.com", "2024-01-01");
const docente1 = new Docente("Maria", "j@j.com", "2024-01-01");

console.log(admin1.exibirInfos());
console.log(user1.exibirInfos());
const dados = User.exibirInfos("joao", "j@j.com");
console.log(dados);
