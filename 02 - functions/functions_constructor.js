/*
    Function () constructor

    *expressão new
    *criar um novo objeto
    *thius keyword

*/

function Person(name){
    this.name = name
    this.walk= function(){
        return this.name + " está andando"
    }
}
const mayk = new Person("mayk") //instanciando um novo objeto
console.log(mayk.walk());

const joao = new Person("joao")
console.log(joao.walk());
