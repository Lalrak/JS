const estudante = "Caroline";
const docente = "Ana";
const cumprimento = "Nosso lema é 'estudar bastante'";
const citacao = `Ju diz: "Nosso lema é 'estudar bastante'"`;

console.log(citacao);
console.log(cumprimento);

console.log('A estudante chama ' + estudante);

// template string

console.log(`A estudante se chama ${estudante}`);

const senha = "SenhaSegura123" + estudante.toUpperCase();
console.log(senha);

//Documentação
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String