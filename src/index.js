import { getBookApi } from "./api/getbooksapi.js";
// import { openModal } from "./modal/modal.js"
// import { closeModal } from "./modal/modal.js";

import { createBookApi } from "./api/createbookapi.js"
import { makeBooksMarkUp } from "./markup/makebooksmarkup.js";
import { deleteBookApi } from "./api/deletebookapi.js";

//Операція читання

getBookApi().then((data) => {
  bookShop.innerHTML = makeBooksMarkUp(data);
  //Операція видалення
    const buttonLinkDelete = document.querySelector(".delete-button");
    console.log(buttonLinkDelete)
    buttonLinkDelete.addEventListener("click", (event) => {
      // deleteBookApi()
      console.log(event.target)
      console.log("click")
    })

});


// операція додавання
const bookShop = document.querySelector(".books-shop");

const openModalButton = document.querySelector(".openModalButton");
const modalButtonSubmit = document.querySelector(".modalBookForm");
const modalBackdrop = document.querySelector(".backdrop");




openModalButton.addEventListener("click", (event) => {
  event.preventDefault();
  modalBackdrop.classList.remove("is-hidden");
});
modalButtonSubmit.addEventListener("submit", async (event) => {
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
  await createBookApi(book);
  await getBookApi().then((data) => {
    bookShop.innerHTML = makeBooksMarkUp(data);

  });
  modalBackdrop.classList.add("is-hidden");
});


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


