function comissao() {

    let vendido = document.getElementById('vendido').value
    let salario = 1200


    if (vendido >= 2000) {

        document.getElementById("resultado").innerHTML = parseFloat(vendido) * 0.10 + salario


    }

}