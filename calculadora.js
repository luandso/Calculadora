var readline = require('readline')

//Cria o elemento de entrada de dados para digitação com usuário
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Informe o valor de A: ', function(numero1){

    let n1 = numero1.replace(",", ".")

    entradaDeDados.question('Informe a operação (+) (-) (x) (/): ', function(resposta){
 
        let operacao = resposta

        entradaDeDados.question('Informe o valor de B: ', function(numero2){

            let n2 = numero2.replace(",", ".")

            if(operacao == '' || n1 == '' || n2 == ''){

                console.log('ERRO: É preciso informar a operação e os valores')

            }else if(isNaN(n1) || isNaN(n2)){

                console.log('ERRO: É necessário informar valores')

            }else if(operacao == '+'){

                let resultado = Number(n1) + Number(n2)
                console.log(`${n1} ${operacao} ${n2} = ${resultado}`)

            }else if (operacao == '-'){

                resultado = Number(n1) - Number(n2)
                console.log(`${n1} ${operacao} ${n2} = ${resultado}`)

            }else if (operacao == 'x'){

                resultado = Number(n1) * Number(n2)
                console.log(`${n1} ${operacao} ${n2} = ${resultado}`)

            }else if (operacao == '/'){

                resultado = Number(n1) / Number(n2)
                console.log(`${n1} ${operacao} ${n2} = ${resultado}`)

            }else if (operacao != '+' || operacao != '-' || operacao != 'x' || operacao != '/'){

                console.log('ERRO: É preciso informar operação')

            }
        
            entradaDeDados.close()

        })

    })

})