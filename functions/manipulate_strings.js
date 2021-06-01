/* Manipulando String e Números

 Transformar String em Números e numeros em String
*/

// let string ='123'
// console.log(Number(string))

// let number = 321
// console.log(String(number))

/*---------------------------------------end-----------------------------*/

/*contar quantos caracteres tem uma palabra e quantos digitos tem um número*/

// let word = "paralelepipedo"
// console.log(word.length)

// let number = 1234 // numero deve ser convertido para string para a função length
// console.log(String(number).length)

/*---------------------------------------end-----------------------------*/

/*
Transformar um número quebrado com 2 casas decmais e trocar ponto por vírgula
*/

// let number = 345.33452345
// console.log(number.toFixed(2).replace(".",",")) //um objeto pode ter diversas funções atreladas ( metodos).

/*---------------------------------------end-----------------------------*/

/* Transformar letrar minúsculas em maiúsculas. Faça o contrario disso também 
*/

// let word = "Programar é muito bacana!"
// console.log(word.toUpperCase())
// console.log(word.toLowerCase())
/*---------------------------------------end-----------------------------*/

/*
    Separe um texto que conte espaçoes, em um novo arrau onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _
*/

// let phrase = "Eu quero viver o Amor!"
// let myArray = phrase.split(" ")
// let phraseWithUnderscore = myArray.join("_")
// console.log(phraseWithUnderscore.toLocaleLowerCase());
/*---------------------------------------end---------------------
--------*/

/*
    Verificar se o texto contém a palavra Amor
*/

// let phrase = "Eu quero viver o amor!"
// console.log(phrase.includes("amor")); // metodo para verificar palavra phrase.includes

/*---------------------------------------end-----------------------------*/

/*
 criar array com construtor

*/

// let myArray = new Array ('a','b','c','d','e')
// console.log(myArray);

/*---------------------------------------end-----------------------------*/

/*
 contar elementos de um array
*/

// console.log([
//     "a",
//     "b",
//     "c"].length)

/*---------------------------------------end-----------------------------*/
    /*
        Transformar cadeia de caracteres em elementos de um array

    */


/*---------------------------------------end-----------------------------*/
    /* 
        Manipulando Arrays
    
    */

        let techs = ["html","css", "js"]

// adicionar um item no fim
    techs.push("node js")

// adicionar no começo
    techs.unshift("sql")

// remover do fim
    //techs.pop()

// remover do começo
    //techs.shift()

// pegar somente alguns elementos do array
    //console.log(techs.slice(1, 3))

// remover 1 ou mais itens em qualquer posição do array
    //techs.splice(1,1)

// encontrar a posição de um elemento no array
    let index =techs.indexOf('css')


 console.log(index);
