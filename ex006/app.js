/*6. Construa um programa que leia o código de um determinado produto e mostre a sua classificação.
Código Classificação
1 - Alimento não-perecível
2, 3 ou 4 - Alimento perecível
5 ou 6 - Vestuário
7 - Higiene pessoal
8, 9, 10 - Utensílios domésticos
Qualquer outro código Inválido*/

function dinheiro() {

    let resultado = document.getElementById('numero1').value

    if( resultado == 1)  {

        document.getElementById('resultado').innerHTML = "alimento não perecível"

    }

   else if( resultado == 2, 3, 4) {

    document.getElementById('resultado').innerHTML = "alimento perecível"   

   }
     else if (resultado == 5, 6){

        document.getElementById('resultado').innerHTML = "Vestuário"

       

    }

    else if (resultado ==7){

        document.getElementById('resultado').innerHTML = "Higiene pessoal"

    }

 else if (resultado == 8, 9, 10){

        document.getElementById('resultado').innerHTML = "Utensílios domésticos"

    }

}