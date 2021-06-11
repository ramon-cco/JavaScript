/*throw - try ... cacth
try {
   try_statements
}
[catch (exception_var_1 if condition_1) {
   catch_statements_1
}]
...
[catch (exception_var_2) {
   catch_statements_2
}]
[finally {
   finally_statements
}]


*/

// throw
function sayMyName(name = ''){ // 1° defino a função e seus parametros
      if (name === ''){
    throw 'Nome é obrigatório'
  }
  console.log(name)// Entra se nao houver erro.
  //caso haja erro o bloco continua

}
//try ... catch
try { // 2 °tento execulta-la
  sayMyName('ramon')

} catch(e){ //3° erro e execultado caso haja
  console.log(e)
}

console.log('aplicacao continua')