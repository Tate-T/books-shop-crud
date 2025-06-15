export const getBookApi = () => fetch("http://localhost:3000/books")
.then((response) => response.json())