function greeting(name) {
  console.log("Olá " + name);
}

function processUserInput(callback) {
  var name = "Por favor insira seu nome.";
  callback(name);
}

processUserInput(greeting);
