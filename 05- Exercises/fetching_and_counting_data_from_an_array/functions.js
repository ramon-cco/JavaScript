  /*
  ∞ Buscando e contando dados em Arrays ∞
  
  Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios

    • Contar o número de categorias e o número de livros em cada categoria
    • Contar o número de autores
    • Mostrar livros do autor Augusto Cury
    • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.     
*/

const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredo da mente milionária",
        author:" T. harv Eker",
      },
      {
        title: "O home mais rico da Babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter",
      },
    ],
  },
  {
    category: "Inteligência Emocial",
    books: [  
      {
        title: "Você é Insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade - Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: " Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. ",
      },
    ],
  },
];


const totalCategories = booksByCategory.length
//variavel recebendo o números de categorias
console.log(totalCategories)
//Impressão na tela

for (let category of booksByCategory){
  //pego uma categoria dentro do booksbyCategory e coloco dentro o objeto category
    console.log('Total de livros da categoria: ', category.category )
    //Impressão na tela  //category.category pegando a categoria do obejeto category criado na função for
    console.log(category.books.length)
    //contando o total de livros da categoria e imprimindo na tela
}

function countAuthors() {
  let authors = [];
  // criando o array q vai ser alimentado com os autores

  for (let category of booksByCategory) {
    //pego a categoria dentro do booksbyCategory e coloco dentro o objeto category
    for (let book of category.books) {
      //Extraio um objeto do array category e chamando ele de book - agora tenho os livros
       if (authors.indexOf(book.author) == -1){
         // se a expressão (authors.indexOf(book.author) == -1) for verdadeira eu faço a inserção com a proxima instrução, caso ela seja falsa eu nao faço nada.
          authors.push(book.author)
          // caso o autor não esteja eu adiciono ele no array
       }
    }
  }

   console.log("total de autores é", authors.length)
   //contando o total de autores imprimindo na tela
}
  
countAuthors();
//chamando a função


function booksOfAugustoCury() {
  let books = [];
  // criando o array q vai ser alimentado com os livros

  for (let category of booksByCategory) {
     //pego a categoria dentro do booksbyCategory e coloco dentro o objeto category
    for (let book of category.books) {
      //Extraio um objeto do array category e chamando ele de book - agora tenho os livros
       if(book.author === 'Augusto Cury'){
         //se o autor for igual a Augusto Cury - verdadeiro 
         books.push(book.title)
         // insiro o titulo do livro o array books
       }
    }
  }

   console.log("Livros do autor: ", books)
    //Imprimindo na tela os titulos dos livros do augusto cury
}
  
booksOfAugustoCury();

function booksOfAuthor(author) {
  // função recebendo o author de forma dinamica
  let books = [];
  // criando o array q vai ser alimentado com os livros

  for (let category of booksByCategory) {
    for (let book of category.books) {
       if(book.author === author){
         //se o autor for igual ao que foi passao na chamada da função - verdadeiro
         books.push(book.title)
         // insiro o titulo do livro o array books
       }
    }
  }

   console.log(`Livros do autor ${author}  ${books.join(", ")}`)
    //Imprimindo na tela os o autor passado na chamda da função e os livros dele por meio de uma template literals, utilizo a função join transformar em uma string com o separador que eu desejo, no caso ",  ".
}
  
booksOfAuthor('Augusto Cury');
//chamando a função passado como paramentro o autor