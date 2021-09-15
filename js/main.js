
var primeiraNota = parseFloat (prompt ("Digite a primeira nota: "))
var segundaNota = parseFloat (prompt("Digite a segunda nota: "))
var terceiraNota = parseFloat (prompt("Digite a terceira nota: "))
var quartaNota = parseFloat (prompt("Digite a quarta nota: "))

var media = ((primeiraNota + segundaNota + terceiraNota + quartaNota)/4.0).toFixed(2)
alert("Sua média é: " + media)

if(media >= 6.0){
    alert("Aluno Aprovado!!!")
}
else{
    alert("Aluno Reprovado!!!")
}