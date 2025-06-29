export const getBookApi = async () => await fetch("http://localhost:3000/books")
.then((response) => response.json())