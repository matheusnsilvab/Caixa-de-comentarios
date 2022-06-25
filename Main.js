function alterarImagem(objeto, caminhoNovaImagem) {
  document.getElementById(objeto).src = 'Imagens/perfil1.jpg';
  
  var titulo = document.querySelector('#texto1');
titulo.textContent = '@oimatth_';
  var paragrafo = document.querySelector('#paragrafo1');
  paragrafo.textContent = 'Matheus Nunes';
  
  var paragrafo2 = document.querySelector('#paragrafo2');
  paragrafo2.textContent = 'Oi, me chama Matheus Nunes';
}

function alterarImagemdois(objeto, caminhoNovaImagem) {
  document.getElementById(objeto).src =
   'Imagens/perfil2.png';
   
   var titulo = document.querySelector('#texto1');
   titulo.textContent = '@lucianoxr';
   var paragrafo = document.querySelector('#paragrafo1');
   paragrafo.textContent = 'Luciano Souza';
   
   var paragrafo2 = document.querySelector('#paragrafo2');
   paragrafo2.textContent = 'Oi, me chamo Luciano Souza';
}