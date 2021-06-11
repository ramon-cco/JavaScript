/*switch

switch (expressão) {
  case valor1:
    //Instruções executadas quando o resultado da expressão for igual á valor1
    [break;]
  case valor2:
    //Instruções executadas quando o resultado da expressão for igual á valor2
    [break;]
  ...
  case valueN:
    //Instruções executadas quando o resultado da expressão for igual á valorN
    [break;]
  default:
    //Instruções executadas quando o valor da expressão é diferente de todos os cases
    [break;]
}

*/

// Switch calculate

function calculate(number1, operator, number2){
    let result

    switch (operator) {
        case '+':
            result =  number1 + number2
        break;
        case '-':
            result =  number1 - number2
        break;
        case '*':
            result =  number1 * number2
        break;
        case '/':
            result =  number1 / number2
        break;
        default:
            console.log('Não Implementado')
        break;
    }
    return result
}


let n1 = 10
let n2 = 10
let operador = '/'

console.log('O resultado é: ' + calculate(n1, operador, n2))
    
