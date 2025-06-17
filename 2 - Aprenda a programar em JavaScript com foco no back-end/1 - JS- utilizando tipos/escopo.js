if (1 > 0) {
  let nome = "Ana";
  console.log(nome); // ‘Ana’
}

// variável `nome` não está acessível
console.log(nome); // Error: nome is not defined

//===============================================

const nome = "Camila"; // variável global

function cumprimentar() {
  console.log(`Olá, ${nome}!`); // Acessa a var global
}

cumprimentar(); // ‘Olá, Camila!”

//================================================
function cumprimentar() {
  const nome = 'Camila'; // variável local
  const cumprimento = 'Olá'; // variável local
  console.log(`${cumprimento}, ${nome}!`); // “Olá, Camila!”
}

// as variáveis não podem ser acessada de fora da função
console.log(`${cumprimento}, ${nome}!`); // Dará erro de “not defined” no console