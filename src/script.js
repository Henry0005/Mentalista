var numeroSecreto = Math.floor(Math.random() * 100) + 1;
var limiteTentativas = 7;
var contador = 0;

while (contador < limiteTentativas) {
  var chute = prompt('Tentativa ' + (contador + 1) + '/' + limiteTentativas + '\nDigite um número entre 1 e 100');
  contador++;

  if (chute === null) {
    alert('Jogo cancelado');
    break;
  }

  chute = parseInt(chute);

  if (isNaN(chute) || chute < 1 || chute > 100) {
    alert('Por favor, digite um número válido entre 1 e 100.');
    contador--; 
    continue;
  }

  if (chute === numeroSecreto) {
    alert('Acertou!');
    break;
  } else if (chute > numeroSecreto) {
    alert('Errou... o número secreto é menor');
  } else {
    alert('Errou... o número secreto é maior');
  }
}

if (contador === limiteTentativas) {
  alert('Suas tentativas acabaram! O número secreto era ' + numeroSecreto);
}
