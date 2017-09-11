
document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    pegar_personagens();


		document.querySelector("#filmes").innerHTML = ""

		document.querySelector('#personagens').onchange=mostrar_filmes;
  }
}

// pegar_personagens()
// adicionar_personagens_ao_dropdown(personagens)

// pegar_personagem_selecionado()
// pegar_filmes(personagem)

var response;
var selected;

function pegar_personagens() {
	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function(){
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
      	response = JSON.parse(httpRequest.responseText);

      	var lista = document.querySelector("#personagens")
      	lista.innerHTML = "<option></option>"

      	response.results.forEach(function (el){ 
      		option = document.createElement("option");
      		option.innerHTML = el.name;
      		option.setAttribute('films', JSON.stringify(el.films));
      		lista.appendChild(option);
      	})

      } else {
        alert('Ops! Problemas pegando personagens!');
      }
    }
	}

	httpRequest.open('GET', 'https://swapi.co/api/people/');
	httpRequest.send();
}

function mostrar_filmes(ev){
	console.log(ev);
	console.log(ev.target);
	console.log(ev.target.value);
	selected = ev.target;
	films = JSON.parse(selected.selectedOptions[0].getAttribute('films'))
	console.log(films)

	var lista = document.querySelector("#filmes")
	lista.innerHTML = ""

	films.forEach(function(url){
		var httpRequest = new XMLHttpRequest();

		httpRequest.onreadystatechange = function(){
	    if (httpRequest.readyState === 4) {
	      if (httpRequest.status === 200) {

					film = JSON.parse(httpRequest.responseText);

      		li = document.createElement("li");
      		li.innerHTML = film.title;
      		lista.appendChild(li);

	      } else {
	        alert('Ops! Problemas pegando filme!');
	      }
			}
		}

		httpRequest.open('GET', url);
		httpRequest.send();
	})
}
