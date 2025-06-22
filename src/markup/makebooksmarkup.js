export const makeBooksMarkUp = (books) => {
    return books.map((book) => {
        return `<li>
        <div class="book-text">
        <h2>${book.title}</h2>
        <p>${book.price}</p>
        <p>${book.author}</p>
        <button class="edit-button" type="button">Редагувати</button>
        </div>
        <img src="${book.image}" alt="${book.title}">
    </li>`
    }).join("")
}

