const myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks(bookList) {
  for (let i = 0; i < bookList.length; i++) {
    let container = document.querySelector(".container");
    let cards = document.createElement("div");
    container.appendChild(cards);
    cards.className("book");
  }
}
