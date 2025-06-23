import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const user1 = new User("Juliana", "j@j.com", "2024-01-01");
const admin1 = new Admin("Rodrigo", "j@j.com", "2024-01-01");
const docente1 = new Docente("Maria", "j@j.com", "2024-01-01");

console.log(admin1.nome);
admin1.nome = "João";
console.log(admin1.nome);
