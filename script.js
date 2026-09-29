const botao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");

let clicado = false;

botao.addEventListener("click", function () {

    if (!clicado) {

        mensagem.textContent =
            "🚀 Parabéns! O JavaScript está funcionando perfeitamente!";

        botao.textContent = "🔥 Você conseguiu!";

        clicado = true;

    } else {

        mensagem.textContent =
            "💻 Continue aprendendo programação!";

        botao.textContent = "✨ Clique novamente";

        clicado = false;
    }

});