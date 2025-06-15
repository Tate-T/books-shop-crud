const bookShop = document.querySelector(".books-shop")

const makeBooksMarkUp = (books) => {
    return books.map((book) => {
        return `<li>
        <h2>${book.title}</h2>
        <p>${book.price}</p>
        <img src="${book.image}" alt="${book.title}">
        <p>${book.author}</p>
    </li>`
    })
}


function getBookApi() {
   return fetch("http://localhost:3000/books")
   .then((response) => response.json())
}


getBookApi().then((data) => {
    bookShop.innerHTML = makeBooksMarkUp(data)
})