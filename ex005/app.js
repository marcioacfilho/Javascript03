/*5. Implemente um código para aprovar empréstimo bancário. O código deve pedir 3 informações: valor do empréstimo, número de parcelas e salário do solicitante. Aprovar empréstimo caso o valor das parcelas representem no máximo 30% do salário do solicitante.*/
function dinheiro() {



    let salario = document.getElementById('numero3').value

    let np = document.getElementById('numero2').value

    let emprestimo = document.getElementById('numero1').value

    let desconto = parseFloat(salario) * 0.30 ;

    let valordasparcelas = parseFloat(emprestimo) / parseFloat(np);



    if(valordasparcelas <= desconto){



        document.getElementById("resultado").innerHTML = "emprestimo aprovado"

    }



    else{

        document.getElementById("resultado").innerHTML = "empréstimo reprovado"

    }

}