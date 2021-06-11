/* 
    Operador precedence
    Precedência de operadores

    * grouping                      ()
    * negação e incremento          ! ++ --
    * mutiplicação e divisão        * /
    * adição e subtração            + -
    * relacional                    < <= > >=
    * igualdade                     == != ===  !==
    * AND                           &&
    * OR                            ||
    * condicional                   ?:
    * assignment (atribuição)       = += -= *=
    
*/

console.log( 2 + 5 * 10)
console.log( (2 + 5) * 10)
console.log( 3 > 2 > 1 ) // true > 1 == false
console.log( 3 > 2 && 2 > 1 ) // true and true == true 
