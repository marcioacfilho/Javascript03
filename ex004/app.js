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
        