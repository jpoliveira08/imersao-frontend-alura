function Converter(){
    
    var valorElemento = document.getElementById("valor").value;

    var valorNumerico = parseFloat(valorElemento);

    var conversao = valorNumerico * (1.0570234105227 * Math.pow(10, -13));

    var aposConversao = document.getElementById("teste");

    var teste = "O valor equivalente em anos-luz é: " + conversao.toString().replace(".", ",");

    aposConversao.innerHTML = teste;
}