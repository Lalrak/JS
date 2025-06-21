// manipulacaoJson.js
const objetoAnimais = {
  animais: [
    {
      id: 1,
      nome: "Leão",
      tipo: "Mamífero",
      habitat: "Savana",
    },
    {
      id: 2,
      nome: "Pinguim",
      tipo: "Ave",
      habitat: "Pólo Sul",
    },
    {
      id: 3,
      nome: "Cobra",
      tipo: "Réptil",
      habitat: "Floresta Tropical",
    },
  ],
};

// Adiciona um novo animal ao array de animais
const novoAnimal = {
  id: 4,
  nome: "Elefante",
  tipo: "Mamífero",
  habitat: "Savana",
};
objetoAnimais.animais.push(novoAnimal);

// Modifica o habitat de um animal existente no array de animais
const animalParaModificar = objetoAnimais.animais.find(
  (animal) => animal.id === 2
);
if (animalParaModificar) {
  animalParaModificar.habitat = "Oceano Antártico";
}

// Remove um animal do array de animais
const indiceAnimalRemover = objetoAnimais.animais.findIndex(
  (animal) => animal.id === 1
);
if (indiceAnimalRemover !== -1) {
  objetoAnimais.animais.splice(indiceAnimalRemover, 1);
}

// Converte o objeto modificado para uma string JSON
const novaStringJsonAnimais = JSON.stringify(objetoAnimais, null, 2);

// Imprime no console o objeto JavaScript resultante das operações
console.log("Objeto JavaScript Resultante das Operações:");
console.log(objetoAnimais);
