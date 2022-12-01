function verificar() {

    let numero = parseInt(document.getElementById("numero").value);
    let resposta = document.getElementById('resultado');
    



    if (numero % 2 == 0) {
        resposta.inneHTML = "numero par";
    }
    else {
        resposta.inneHTML = "numero impar";
    }



}