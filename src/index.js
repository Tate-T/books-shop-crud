import { getBookApi } from "./api/getbooksapi.js"

import { makeBooksMarkUp } from "./markup/makebooksmarkup.js"

const bookShop = document.querySelector(".books-shop")

getBookApi().then((data) => {
    bookShop.innerHTML = makeBooksMarkUp(data)
})