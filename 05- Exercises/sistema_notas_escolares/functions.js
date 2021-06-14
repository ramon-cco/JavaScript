/*

     Arquivo utilizado para aprendizado, dados inseridos nos respectivos arquivos
   .js na pasta do módulo
   
*/
/*
  ### Transformar notas escolares

  Crie um algoritmo que transforme as notas do sistéma númerico para sistema de
  notas em caracteres tipos A B C

    * de 90 para cima   - A
    * entre 80 - 89     - B
    * entre 70 - 79     - C
    * entre 60 - 69     - D
    * menor que 60      - F
    * 
*/
// versão inicial:
// let nota = -25

// let nota_a = nota >=90 && nota <=100
// let nota_b = nota >=80 && nota <=89
// let nota_c = nota >=70 && nota <=79
// let nota_d = nota >=60 && nota <=69
// let nota_f = nota <60 && nota >= 0

//   if (nota_a){  
//     console.log('A sua nota é A')
//   }else if (nota_b){
//     console.log('A sua nota é B')
//   }else if (nota_c){
//     console.log('A sua nota é C')
//   }else if (nota_d){
//     console.log('A sua nota é D')
//   }else if (nota_f){
//     console.log('A sua nota é F')
//   } else {
//     console.log('Nota inválida')
//   }

  //Versão melhorada: 

  // let score = 50

  // let score_a = score >=90 && score <=100
  // let score_b = score >=80 && score <=89
  // let score_c = score >=70 && score <=79
  // let score_d = score >=60 && score <=69
  // let score_f = score <60 && score >= 0
  
  // let scoreFinal;

  //   if (score_a){  
  //     scoreFinal = "A sua nota é: A"
  //   }else if (score_b){
  //     scoreFinal = 'A sua nota é B'
  //   }else if (score_c){
  //     scoreFinal = 'A sua nota é C'
  //   }else if (score_d){
  //     scoreFinal ='A sua nota é D'
  //   }else if (score_f){
  //     scoreFinal = 'A sua nota é F'
  //   } else {
  //     scoreFinal = 'Nota inválida'
  //   }

  //   console.log(scoreFinal)

    // Versão utilizando função

    function getScore(score) {
      let score_a = score >=90 && score <=100
      let score_b = score >=80 && score <=89
      let score_c = score >=70 && score <=79
      let score_d = score >=60 && score <=69
      let score_f = score <60 && score >= 0
    
      let scoreFinal;

      if (score_a){  
        scoreFinal = "A sua nota é: A"
      }else if (score_b){
        scoreFinal = 'A sua nota é B'
      }else if (score_c){
        scoreFinal = 'A sua nota é C'
      }else if (score_d){
        scoreFinal ='A sua nota é D'
      }else if (score_f){
        scoreFinal = 'A sua nota é F'
      } else {
        scoreFinal = 'Nota inválida'
      }
      return scoreFinal;
    }

    console.log(getScore(-25))
    console.log(getScore(0))
    console.log(getScore(25))
    console.log(getScore(60))
    console.log(getScore(65))
    console.log(getScore(75))
    console.log(getScore(82))
    console.log(getScore(89))
    console.log(getScore(90))
    console.log(getScore(99))
    console.log(getScore(130))
