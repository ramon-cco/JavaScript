/*
Estrtura de repetição
    for ... of

Sintaxe:

    for (variavel of iteravel) {
    declaração
    }

variável:

A cada iteração, um valor de uma propriedade diferente é atribuido à variável.
iteravel
Objeto cujos atributos serão iterados.

Exemplos:
Iterando sobre um Array
    let iterable = [10, 20, 30];

    for (let value of iterable) {
    console.log(value);
    }
    // 10
    // 20
    // 30
*/

let name = 'Mayk'
let names = ['joão', 'Paulo', 'Pedro']

for(let char of name){
    console.log(char)
}

console.log("++++++++++++++++++(º____º)++++++++++++++++++")

for(let name of names){
    console.log(name)
}