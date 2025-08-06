let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


document.querySelector('.container__input').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    verificarChute();
  }})

function nomeInicial(){
 let nome = prompt('Qual o seu nome? ')
 return nome;
}



function exibirTextoNaTela(tag,texto){
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
  exibirTextoNaTela('h1','Jogo do Numero Secreto')
  exibirTextoNaTela('h2',`Olá ${nomeInicial()} seja bem vindo!`)
exibirTextoNaTela('p', `Escolha um numero entre 1 e ${numeroLimite} e veja se você consegue acertar o numero que estou pensando!`)
}

exibirMensagemInicial();




function verificarChute(){
  let chute =  document.querySelector('input').value
  if(chute == numeroSecreto){
    exibirTextoNaTela('h1','Parabéns, você Acertou!')
    let palavraTentativa = tentativas > 1 ? 'tentativas':'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela('p',mensagemTentativas)
    document.getElementById('reiniciar').removeAttribute('disabled')
  }else{
    if(chute > numeroSecreto){
      exibirTextoNaTela('p','IIh ERROU! O numero secreto é menor')
    }else{
      exibirTextoNaTela('p','IIh ERROU!O numero secreto é maior')
    }
    tentativas++
    limparCampo();
  }
}

function gerarNumeroAleatorio(){
  let numeroEscolhido = parseInt(Math.random()*numeroLimite+1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length

  if(quantidadeDeElementosNaLista == numeroLimite){
listaDeNumerosSorteados = []
  }

  if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
  }else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados)
    return numeroEscolhido;
  }
}

function limparCampo(){
  chute = document.querySelector('input')
    chute.value = '';
  
}
function reiniciarJogo(){
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial()
  document.getElementById('reiniciar').setAttribute('disabled',true)

  
}

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});
document.onkeydown = function(e) {
  // Desabilita F12
  if (e.key === "F12" || e.keyCode === 123) {
    e.preventDefault();
  }
  // Desabilita Ctrl+Shift+I
  if (e.ctrlKey && e.shiftKey && (e.key === "I" || e.keyCode === 73)) {
    e.preventDefault();
  }
  // Desabilita Ctrl+Shift+J
  if (e.ctrlKey && e.shiftKey && (e.key === "J" || e.keyCode === 74)) {
    e.preventDefault();
  }
  // Desabilita Ctrl+U
  if (e.ctrlKey && (e.key === "U" || e.keyCode === 85)) {
    e.preventDefault();
  }
}