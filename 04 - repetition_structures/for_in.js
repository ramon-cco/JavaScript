/*
Estrtura de repetição
    for ... in

    Cria um loop sobre um objeto

Sintaxe:

    for (variavel in objeto) {...
    }   

Exemplos:
    A função seguinte toma como argumento um objeto. 
    O laço for...in iterage sobre todos as propriedades enumeráveis do objeto e 
    retorna uma string com o nome das propriedades e seus respectivos valores.

    //Objeto
        var obj = {a:1, b:2, c:3};

//Para prop (propriedade) in obj (objeto) faça
        for (var prop in obj) {
  // ctrl+shift+k (para abrir o console no mozilla firefox)
        console.log("obj." + prop + " = " + obj[prop]);
        }

//A saída (output) deverá ser:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
*/

let person = {
    name : 'John',
    age : 30,
    weight : 88.6
}

for(let property in person){ //colocando na variavel property os atributos do objeto person
    console.log(property) // imprimindo os atributos
     console.log(person[property]) // imprimindo os valores dos atributos
    
}