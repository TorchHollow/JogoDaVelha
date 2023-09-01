document.addEventListener('DOMContentLoaded',()=>{
    let quadrados = document.querySelectorAll(".quadrados")

    quadrados.forEach((quadrado)=>{
        quadrado.addEventListener('click', handleClick)
    })
})

function handleClick(evento){
    let quadrado = evento.target
    let position = quadrado.id

    handleMove(position)
    updateSquares()
}

function updateSquares(){

    let quadrados = document.querySelectorAll(".quadrados")

    quadrados.forEach((quadrado)=>{
        let position = quadrado.id
        let simbulos = tabuleiro[position]

        if(simbulos != '') {
            quadrado.innerHTML = `<div class='${simbulos}'></div>`
        }
    })
}