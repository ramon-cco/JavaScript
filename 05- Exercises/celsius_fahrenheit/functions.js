/*

     Arquivo utilizado para aprendizado, dados inseridos nos respectivos arquivos
   .js na pasta do módulo
   
*/
/*
    ### Celsius em fahrenheit

    Crie uma função que receba uma string em celsius ou fahrenheit e 
    faça a transformação de uma para outra

      C = (F -32) * 5/9
      
      F = C  * 9/5 + 32
  */
 
    /*
    inicio da logica:

      // let temperatureFar = 55
      // let temperatureCel = 22

      // celsius = (temperatureFar - 32) * 5/9;
      // console.log(celsius)

      // fahrenheit = temperatureCel * 9/5 + 32
      // console.log(fahrenheit)
    */
   /* 1º versao - Aluno*/
    // function transformDegree(degree) {
    //   const celsiusExists = degree.toUpperCase().includes('C')
    //   const fahrenheitExists = degree.toUpperCase().includes('F')

    //   const toCelsius = (degree.replace('F', '').replace('f', '') -32) * 5/9; 
    //   const toFahrenheit = degree.replace('C', '').replace('c', '') * 9/5 +32 ;

    //   if(celsiusExists == true){
    //    conversion = console.log('A temperatura è: ' + toFahrenheit.toFixed(0) + 'ºF')
    //   }else if(fahrenheitExists == true){
    //     conversion = console.log('A temperatura è: ' + toCelsius.toFixed() + 'ºC')
    //   }
    //   return conversion;
    // }

    // console.log(transformDegree('25f'))

    /* 2º versão - Professor*/

    function transformDegree(degree) {
      const celsiusExists = degree.toUpperCase().includes('C')
      const fahrenheitExists = degree.toUpperCase().includes('F')

      //fluxo de erro
      if(!celsiusExists && !fahrenheitExists){
        throw new Error('Grau não identificado')
      }

      //fluxo ideal, F -> C
      let updatedDegree = Number(degree.toUpperCase().replace("F",""));
      //number- numero criado  // toUpperCase -  converte para maiusculas // replace("C","") - remove o C e coloca no lugar vazio ""
      
      let formula = fahrenheit => (fahrenheit - 32) * 5/9
      //arrow function -(param1, param2, …, paramN) => expression
      // equivalente a: => { return expression; }

      let degreeSign = 'C' //varaivel com a letra

      //fluxo alternativo 
      if(celsiusExists){
        updatedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'
      }

      return formula(updatedDegree) + degreeSign // retornando o resultado
      // com a letra equivalente aos grau

  }
    //eecutando com o try
    try{
      console.log(transformDegree('10C'))
      console.log(transformDegree('50F'))
      console.log(transformDegree('50z'))
    } catch (error){
      console.log(error.message)
    }

