var setaDireita = window.document.getElementById("seta-direita")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var Leonardo2 = window.document.getElementById("Leonardo2")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita(){
    Leonardo.style = "display:none"
    Leonardo2.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex"
}
function RolarParaEsquerda(){
    Leonardo.style = "display:flex"
    Leonardo2.style = "display:none"
    setaDireita.style = "display:flex"
    setaEsquerda.style = "display:none"
}