export const deleteBookApi = (bookId) => { 
    return fetch(`http://localhost:3000/books/${bookId}`)
}