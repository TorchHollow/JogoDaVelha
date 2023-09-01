//iniciar variáveis
let tabuleiro = ['', '', '', '', '', '', '', '', '']
let veizDoJogador = 0
let simbulos = ['o', 'x']

function handleMove(position) {

    if (tabuleiro[position] == '') {
        tabuleiro[position] = simbulos[veizDoJogador]

        if (veizDoJogador == 0) {
            veizDoJogador = 1

        } else {
            veizDoJogador = 0
        }

    }
}