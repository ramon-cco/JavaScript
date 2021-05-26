// Object

const person ={
    name: 'John',
    age: 30,
    weight: 88.6,
    isAdmin: true
}


console.log(`${person.name} tem ${person.age} anos`)

//array

const animals = [
    'lion',
    'monkey',
    {
       name: 'cat',
       age: 99
    }
]


// acessar valores dentro do array
console.log(animals[2])
console.log(animals[2].age)
console.log(animals.length)// quantidade itens no array