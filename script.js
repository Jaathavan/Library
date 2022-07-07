let myLibrary = ["H.P", "S", "K"];

function Book(author, title, pageCount) {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

const library = document.querySelector('.books');

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        let book = document.createElement("div");
        book.textContent = myLibrary[i];
        library.appendChild(book).className = "book";
    }
}

displayBooks();