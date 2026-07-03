// 1. Acha o botão na página
const botao = document.getElementById('meuBotao');

// 2. Acha o parágrafo na página
const mensagem = document.getElementById('mensagem');

// 3. Contador começa em zero
let cliques = 0;

// 4. Quando clicar no botão...
botao.addEventListener('click', function () {
    cliques = cliques + 1;                    // soma 1
    mensagem.textContent = 'eai mano você clicou ' + cliques + ' vez(es)! 🎉';  // muda o texto
});
