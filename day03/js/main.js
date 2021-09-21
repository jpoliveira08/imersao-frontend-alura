var numeroSecreto = parseInt(Math.random() * 11);

var numeroTentativas=0;
var acertou = false;
function Chutar(){

    do{
        var elementoResultado = document.getElementById("resultado");
        var chute = parseInt (document.getElementById("valor").value);
        numeroTentativas++;
        
        if(chute == numeroSecreto){
            elementoResultado.innerHTML = "Você acertou!";
            acertou = true;
            break;
        }else if (chute > numeroSecreto){
            elementoResultado.innerHTML = "Quase, digite um valor menor!\nTentativas restantes " + (10-numeroTentativas);
        }
        else if (chute < numeroSecreto){
            elementoResultado.innerHTML = "Quase, digite um valor maior!\nTentativas restantes " + (10-numeroTentativas);        
        }
    }while(numeroTentativas > 10);

}
