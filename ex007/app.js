/*7. Faça um programa que receba um número inteiro qualquer e mostre se ele é par ou impar.*/
function verificar(){

    let numero = parseInt(document.getElementById("numero").value);
    let resposta = document.getElementById('resultado');
    



    if (numero % 2 == 0) {
        resposta.innerHTML = "numero par";
    }
    else {
        resposta.innerHTML = "numero impar";
    }


}