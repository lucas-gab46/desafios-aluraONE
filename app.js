alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log ('numeroSecreto');
let chute;
let tentativas = 1;


while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100');

 {   if (chute == numeroSecreto) {
    break;

    } else if (chute < numeroSecreto) {
        alert(`O número secreto é maior que ${chute}`);
    } else {
        alert(`O número secreto é menor que ${chute}`);
    } tentativas++
}

}
let palavraTentativa = tentativas > 1 
if(tentativas > 1 );    
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}`);
        console.log(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);