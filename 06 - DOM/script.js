/* Conceitos basico do DOM com JS */

//getElmentById()
// const element = document.getElementById('blog-title')
// console.log(Element)


// //getElementByClassName() - Busca elementos pelo nome da classe e os mostra em um HTMLCollection
// const className = document.getElementsByClassName('one')
// console.log(className)


// //getElementByTagName() - Busca elementos pelo nome da tag e os mostra em um HTMLCollection
// const tag = document.getElementsByTagName('meta')
// console.log(tag)

// //querySelector() - busca pelo seletor igual no css e trás o primeiro que econtrar(colocando o .junto ao nome para captura o elemento certo)
// const elemento= document.querySelector('.one')
// console.log(element)

// //querySelectorAll() - busca todos os seletores
// const elements = document.querySelectorAll('[src]')
// console.log(elements)

// elements.forEach(el => console.log(el))

//Qual usar?

// getElementById (element)
// getElementByClassName (HTMLColletion -não aceita forEach)
// getElementByTagName (HTMLColletion - não aceita forEach)
// querySelector (element)
// querySelectorAll (Nodelist - aceita forEach)


//Manipulando Conteúdo
// textcontent
//  const element = document.querySelector('h1')
// element.textContent = "Ola Devs"

// console.log(element)

//innerText
// element.innerText = "oie programação"

//innerHtml
// element.innerHTML = "Ola Devs! <small>!!!</small>" 

// const element = document.querySelector('input')

// console.log(element.value)
// element.value = "outro valor"

//Atributos

const header = document.querySelector('header')//pegando o elemento header
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')

console.log(headerID.getAttribute('class'))

header.removeAttribute('id')

