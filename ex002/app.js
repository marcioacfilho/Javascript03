/*2. Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.*/
function PositivoOuNegativo(){
    let n1 = document.getElementById("numero1").value
    if(n1 >= 1){
        document.getElementById("resultado").innerHTML = "Positivo"
    }else if(n1 <= -1){
        document.getElementById("resultado").innerHTML = "Negtivo"
    }else if(n1 == 0){
        document.getElementById("resultado").innerHTML = "Neutro"
    }else{
        document.getElementById("resultado").innerHTML = "Valor inválido"
    }
    // limpar campo
    document.getElementById("numero1").value =""
}