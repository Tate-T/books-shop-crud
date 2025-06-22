import { getBookApi } from "./api/getbooksapi.js";
// import { openModal } from "./modal/modal.js"
// import { closeModal } from "./modal/modal.js";

import { createBookApi } from "./api/createbookapi.js"
import { makeBooksMarkUp } from "./markup/makebooksmarkup.js";

// операція додавання
const bookShop = document.querySelector(".books-shop");

const openModalButton = document.querySelector(".openModalButton");
const modalButtonSubmit = document.querySelector(".modalBookForm");
const modalBackdrop = document.querySelector(".backdrop");




openModalButton.addEventListener("click", (event) => {
  event.preventDefault();
  modalBackdrop.classList.remove("is-hidden");
});
modalButtonSubmit.addEventListener("submit", (event) => {
  event.preventDefault();
  const bookTitle = event.target.elements.formTitle.value;
  const bookPrice = event.target.elements.formPrice.value;
  const bookAuthor = event.target.elements.formAuthor.value;
  const bookImage = event.target.elements.formImage.value;
  const book = {
    title: bookTitle,
    price: bookPrice,
    image: bookImage,
    author: bookAuthor
  };
    createBookApi(book);
    getBookApi().then((data) => {
      bookShop.innerHTML = makeBooksMarkUp(data);
    });
  modalBackdrop.classList.add("is-hidden");
});





getBookApi().then((data) => {
  bookShop.innerHTML = makeBooksMarkUp(data);
});

console.log();

// операція редагування
// const editForm = document.querySelector(".modalEditForm");
// const editButton = document.querySelector(".edit-button");
// const backdrop = document.querySelector(".edit-backdrop")

// editButton.addEventListener("submit", (event) => {
// event.preventDefault();
// modalBackdrop.classList.remove(".is-hidden")
// })

// editForm.addEventListener("submit", (event) => {
// event.preventDefault();
//   const editBookTitle = event.target.elements.formTitle.value;
//   const editBookPrice = event.target.elements.formPrice.value;
//   const editBookImage = event.target.elements.formImage.value;
//   const editBookAuthor = event.target.elements.formAuthor.value;
//   const editBook = {
//     title: editBookTitle,
//     price: editBookPrice,
//     image: editBookImage,
//     author: editBookAuthor
//   };
//   modalBackdrop.classList.add(".is-hidden")
// })


