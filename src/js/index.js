const personagens = document.querySelectorAll(".personagem")
const botoes = document.querySelectorAll(".botao")

botoes.forEach((botao, index) => {
    botao.addEventListener("click", () => {
        desselecionarBotao();
        botao.classList.add(
            "selecionado"
        )
        desselecionarPersonagem();
        personagens[index].classList.add(
            "selecionado"
        )
    });
});

function desselecionarPersonagem() {
    const personagem_selecionado = document.querySelector(
        ".personagem.selecionado"
    );
    personagem_selecionado.classList.remove(
        "selecionado"
    );
}

function desselecionarBotao() {
    const botao_selecionado = document.querySelector(
        ".botao.selecionado"
    );
    botao_selecionado.classList.remove(
        "selecionado"
    );
}

