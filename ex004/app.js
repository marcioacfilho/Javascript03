/*4. A empresa XKW concedeu um bônus de 20% do valor do salário a todos os funcionários com tempo de trabalho na empresa igual ou superior a 5 anos e de 10% aos demais. Faça um programa que receba o salário e o tempo de serviço de um funcionário, calcule e mostre o valor do bônus recebido por ele.*/
function dinheiro() {



    let tempo = document.getElementById('numero2').value

    let salario = document.getElementById('numero1').value




if (tempo >= 5) {

    document.getElementById("resultado").innerHTML = parseFloat(salario) * 0.20

}

else {

 document.getElementById("resultado").inneHTML = parseFloat(salario) * 0.10

}

}
        