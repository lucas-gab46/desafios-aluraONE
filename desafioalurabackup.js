console.log('Boas-vindas ao Site!');
alert('Boas-vindas ao Site!');
var nome = prompt('Insira seu Nome');
alert('Nome inserido: ' + nome);
alert('Boas-vindas!');
var programa = prompt('Qual a linguagem de programação que você mais gosta?');
var valor1 = 10;
var valor2 = 2;
var resultadoSoma = valor1 + valor2;
console.log('A soma de valor1 e valor2 é igual a ' + resultadoSoma + ' no console.');

var valor3 = 5;
var valor4 = 2;
var resultadoSubtracao = valor3 - valor4;
console.log('A subtração de valor3 e valor4 é igual a ' + resultadoSubtracao + ' no console.');

var idade = prompt('Insira a sua idade:');
if (nome === null || nome === "" || idade === null || idade === "") {
    alert('Erro! Preencha todos os campos');
} else {
    if (idade >= 18) {
        alert('Você é maior de idade');
      
    } else {
        alert('Você é menor de idade.');
    }
}

var numero = prompt('Digite um Numero');
if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

var nota = 10;
if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

let numeroAleatorio1 = parseInt(Math.random() * 10 + 1);
console.log('O numero é: ' + numeroAleatorio1);

let numeroAleatorio2 = parseInt(Math.random() * 1000 + 1);
console.log('O numero é: ' + numeroAleatorio2);
