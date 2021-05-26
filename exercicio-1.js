// 1. Declare uma variável do nome weight
    var weight;

// 2. Quetipo de dado é a variável acima
 console.log(typeof weight)
 //underfined

/*
    3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (interger)
        * stars: Number (float)
        * isSubscribed: Boolean

*/


    let name = 'jose'
    let age = 33
    let stars = 4.5
    let isSubscribed = true



/* 4. A variável student abaixo é de que tipo de dados?
//object

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 mostre no console a seguinte mensagem:

    <name> de idade <age> pesa <weight> kg.

    Atenção, subtitua <name> <age> e < weight> pelos valores de cada propriedade do obejto
*/

let student = {
     name: 'jose',
     age: 33,
     stars: 4.5,
     isSubscribed: true,
     weight:92
};

console.log(`${student.name} de idade ${student.age} pesa ${student.weight}.kg`)

/* 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente um Array vazio.
 
*/
let students = []

/*
 6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (não copiar e colar o obejto, mais usar o objeto criado e inserir ele no Array)
*/
students = [
    student
]

/*
    7. coloque no console o valor da posição zero do Array acima
*/
 
console.log(students[0])

/* 
    8. Crie um novo student e coloque na posição 1 do Array students
*/


let student2 = {
    name: 'maria',
    age: 22,
    stars: 3.85,
    isSubscribed: false,
    weight:65
};
//Reatribuindo
// students = [
//     student,
//     student2
// ]

//atribuindo valor diretamente na posicao do array
students[1] = student2


console.log(students)

/* 
    9. Sem rodar o codígo responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

    console.log(a)
    var a = 1
    
*/

console.log(a)
var a = 1 