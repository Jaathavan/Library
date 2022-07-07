let myLibrary = [{author: "a", title: "b", pageCount: "c"}, {author: "y", title: "x", pageCount: "z"}];

function Book() {
  // the constructor...
}

function addBookToLibrary(a, t, p) {
    myLibrary.push({ 
        author: a, 
        title: t, 
        pageCount: p 
    })
  // do stuff here
}

const library = document.querySelector('.books');

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        let book = document.createElement("div");
        book.textContent = myLibrary[i];
        book.id = i;
        library.appendChild(book).className = "book";
    }
}

displayBooks();