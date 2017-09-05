function instrucao(qual){
	document.querySelector("#mensagem").innerHTML = qual;
}

function adicionar_tentativa(num){
	var ul = document.querySelector("ul#lista_de_chutes");
	var li = document.createElement("li");
	var text = document.createTextNode(num);
	li.appendChild(text);
	ul.appendChild(li);
}

function jogo(fase) {
	// console.log(fase);

	if(fase === 1){
		instrucao("Você deve adivinhar o número que vou pensar...");
	}
	else if (fase === 2){
		instrucao("Estou pensando em um número de 1 a 50!");
		numero = Math.floor(Math.random()*50)+1
	}
	else if (fase === 3){
		instrucao("Tente adivinhar o número!");
		document.querySelector("#entrada").setAttribute("style", "display:block;");
	}
	else {
		var tentativa = document.querySelector("#entrada").value;

		adicionar_tentativa(tentativa);

		if(tentativa == numero){
			instrucao("Parabéns! Você acertou!");
		}
		else if(tentativa < numero){
			instrucao("Seu número é baixo demais...");
		}
		else if(tentativa > numero){
			instrucao("Seu número é alto demais...");
		}
	}
}

var fase = 0;
var numero;
document.querySelector('button').onclick = function(){
	fase = fase+1;
	jogo(fase);
}