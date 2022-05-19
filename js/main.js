// var books = []

// var booksListElement = document.getElementById('books')

// var addBookbtn = document.getElementById('add')
// var messageSpan = document.getElementById('message')

// var bookInput = document.getElementById('bookName')

// renderbooks(books)

// addBookbtn.addEventListener('click', () => {
//     let liElement = document.createElement('li')

//     messageSpan.textContent = "" 
//     liElement.textContent = bookInput.valeu
//     booksListElement.appendChild(liElement)

//     bookInput.valeu = "" 
// })

// function renderbooks(books = []){
//     for(let index = 0; index < books.length; index++){
//         let liElement = document.createElement('li')
//         let tempBook = books[index]
//         liElement.textContent = '${tempBook}'
//         liElement.setAttribute('class', 'list_items')
//         booksListElement.appendChild(liElement)
//     }
// }



const numbers = [10,20,30,40,50,60,70,80,90,100]

var sum = 0
for (var i=0; i < numbers.length; i++){
    sum += numbers[i]

}

alert('Array:  10,20,30,40,50,60,70,80,90,100 + yigindi='+sum);