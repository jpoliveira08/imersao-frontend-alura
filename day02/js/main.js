//Com o onclick do html é possível passar o dado para js

function Converter() {
    //Criando uma variável para o valor que é inserido no input
    //Verificar o valor do input no html
    var valorElemento = document.getElementById("valor");
    //Pegando somento o valor inserido no campo
    var valor = valorElemento.value;
    //Transformando String em double
    var valorNumerico = parseFloat(valor);

    var valorEmDolar = valorNumerico / 5.26;
    var valorEmEuro = valorNumerico / 6.19;
    var valorEmLibra = valorNumerico / 7.26;
    var valorEmBitcoin = valorNumerico * 0.0000039;
    //Mostrando o valor na tela - <h2 id="valorConvertido"></h2>

    var elementoValorConvertido1 = document.getElementById("valorConvertido1");
    var elementoValorConvertido2 = document.getElementById("valorConvertido2");
    var elementoValorConvertido3 = document.getElementById("valorConvertido3");
    var elementoValorConvertido4 = document.getElementById("valorConvertido4");

    //Se faz necessário pegar o valorEmReal dentro do valorConvertido
    var valorConvertido1 = "O resultado em Dolar é: $ " + valorEmDolar.toFixed(2);
    var valorConvertido2 = "O resultado em Euro é: € " + valorEmEuro.toFixed(2);
    var valorConvertido3 = "O resultado em Libra é: £ " + valorEmLibra.toFixed(2);
    var valorConvertido4 = "O resultado em BitCoin é: ₿ " + valorEmBitcoin.toFixed(5);
    
    //Colocando dentro do HTML
    elementoValorConvertido1.innerHTML = valorConvertido1;
    elementoValorConvertido2.innerHTML = valorConvertido2;
    elementoValorConvertido3.innerHTML = valorConvertido3;
    elementoValorConvertido4.innerHTML = valorConvertido4;
    
}