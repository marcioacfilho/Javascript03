/*8. Tendo como entrada o total vendido por um funcionário no mês de abril, faça um programa que calcule e mostre a sua comissão e seu salário bruto neste mês, sabendo que o seu salário base é R$1.200,00 e sua comissão é de 10% sobre o total vendido. O funcionário só ganhará comissão se o valor total vendido for maior que R$2.000*/
function comissao() {

    let vendido = document.getElementById('vendido').value
    let salario = 1200


    if (vendido >= 2000) {

        document.getElementById("resultado").innerHTML = parseFloat(vendido) * 0.10 + salario


    }

}