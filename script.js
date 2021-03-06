let myLibrary = [{author: "a", title: "b", pageCount: "c"}, {author: "y", title: "x", pageCount: "z"}];

function Book(author, title, pageCount) {
  this.author = author;
  this.title = title;
  this.pageCount = pageCount
}

function addBookToLibrary(a, t, p) {
    myLibrary.push(new Book(a, t, p))
}

const library = document.querySelector('.books');

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        let book = document.createElement("div");
        book.id = i;

        //add author element
        let author = document.createElement("div");
        author.textContent = "Author: " + myLibrary[i].author;
        book.appendChild(author).className = "author";

        //add title element
        let title = document.createElement("div");
        title.textContent = "Title: " + myLibrary[i].title;
        book.appendChild(title).className = "title";

        //add pageCount element
        let pageCount = document.createElement("div");
        pageCount.textContent = "Page Count: " + myLibrary[i].pageCount;
        book.appendChild(pageCount).className = "pageCount";

        library.appendChild(book).className = "book";
    }
}

displayBooks();