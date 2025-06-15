const createBookApi = (newBook) => {
    const option = {
        method: "POST",
        body: JSON.stringify(newBook),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    }
    return fetch("http://localhost:3000/books", option)
}