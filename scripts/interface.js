document.addEventListener('DOMContentLoaded', () => {
    let quadrados = document.querySelectorAll(".quadrados")

    quadrados.forEach((quadrado) => {
        quadrado.addEventListener('click', handleClick)
    })
})

function handleClick(evento) {
    let quadrado = evento.target
    let position = quadrado.id

    if (handleMove(position)) {
        setTimeout(() => {

        }, 10)

        alert(" O Jogo Acabou - O Vencedor foi o jogador" + veizDoJogador)
    }
    updateSquares()
}

function updateSquare(position){
    let quadrado = document.getElementById(position.toString())
    let simbulos = tabuleiro[position]
    quadrado.innerHTML = `<div class='${simbulos}'></div>`
}

function updateSquares() {

    let quadrados = document.querySelectorAll(".quadrados")

    quadrados.forEach((quadrado) => {
        let position = quadrado.id
        let simbulos = tabuleiro[position]

        if (simbulos != '') {
            quadrado.innerHTML = `<div class='${simbulos}'></div>`
        }
    })
}

/*O que falta:

-Fazer um botão de reset
-Melhorar a mensagem de vitória

*/