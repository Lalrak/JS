alert('Boas vindas ao jogo do mundo secreto');
let numeroMaximo = alert('Digite o valor máximo para o jogo')
let numeroSecreto = parseInt(Math.random() * parseInt(numeroMaximo)) + 1;
let chute;
let tentativa = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if (numeroSecreto == chute) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}.`);
        } else {
            alert(`O número secreto é maior que ${chute}.`);
        }
    }
    tentativa++;
}
let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';

alert(`Isso ai! Você descobriu o número secreto ${chute} com ${tentativa} ${palavraTentativa}`);