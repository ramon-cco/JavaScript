/*

     Arquivo utilizado para aprendizado, dados inseridos nos respectivos arquivos
   .js na pasta do módulo
   
*/
/*
  ### Sistema de gastos familiar

  Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
      * Receitas: []
      * despesas: []
    

  Agora, crie uma função que irá calcular o total de receitas e despesas e 
  irá mostrar uma mensagem se a família está com saldo positivo ou negativo,
  seguindo do valor do saldo.

  */
  
  let family = {
        incomes: [2, 5, 16],
        expenses: [5, 5, 5]
      }

  function sum(array) {
      let total = 0;
      for(let value of array)
      total+= value
    
    return total
  }

  function calculateBalance() {
      const calculateIncomes = sum(family.incomes)
      const calculateExpenses = sum(family.expenses)

     const total = calculateIncomes - calculateExpenses

    const itsOk = total > 0
   
    let balanceText = "negativo"

      if(itsOk){
        balanceText = "positivo"
      } 
      console.log (`Seu saldo é ${balanceText}: R$ ${total.toFixed(2)}`)
  }

  calculateBalance()
  
    
  
  // let caixa = {
  //   receitas: [2, 5, 3],
  //   despesas: [5, 5, 5]
  //   }
  // let totalReceita = 0
  // for ( var i = 0; i < caixa.receitas.length; i++) {
  //   totalReceita += caixa.receitas[i]   
  // } 

  // let totalDespesas = 0
  // for (var i = 0; i < caixa.despesas.length; i++){
  //   totalDespesas += caixa.despesas[i]
  // }
 
//    let saldo = totalReceita - totalDespesas
   
//   if (saldo < 0) {
//     console.log("o seu saldo está negativo em: " + saldo)
//   }else if (saldo > 0){
//     console.log("o seu saldo está positivo em: " + saldo)
//   } else {
//     console.log("o seu saldo está zerado.")
//   }

//   return saldo;

 
 
// console.log(orcamento)



