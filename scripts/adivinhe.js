function jogo(fase){

	var instrucoes = document.querySelector('#mensagem');
	// Fase 1 - Instruções
	if (fase == 1){
		instrucoes.innerHTML = 'Você deve adivinhar o número que vou pensar, ok?';
	}
	else if (fase == 2){
		numero = Math.floor(Math.random()*50);

		instrucoes.innerHTML = 'Estou pensando em um número entre 0 e 50...';
	}
	else if (fase == 3){
		instrucoes.innerHTML = 'Tente adivinhar!';
		document.querySelector('#entrada').setAttribute("style", "display:block;");

	}
	else if (fase > 3){
		var tentativa = document.querySelector('#entrada').value;
		if(tentativa == numero){
			instrucoes.innerHTML = 'PARABÉNS! Acertou!';
		}
		else if (tentativa < numero){
			instrucoes.innerHTML = 'Seu número é muito baixo...';
		}
		else if (tentativa > numero){
			instrucoes.innerHTML = 'Seu número é muito alto...';
		}
	}
}

var fase = 0;
var numero;
document.querySelector('button').onclick = function(){
	fase = fase+1;
	jogo(fase);
}
