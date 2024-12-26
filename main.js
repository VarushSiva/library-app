const myLibrary = [];
let container = document.querySelector(".container");

function Book(cover, title, author, pages, isRead) {
  this.cover = cover;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

let onePieceCover =
  "https://m.media-amazon.com/images/I/71y+XnBXm4L._AC_UF1000,1000_QL80_.jpg";
let onePieceVol1 = new Book(
  onePieceCover,
  "One Piece Vol 1",
  "Eiichiro Oda",
  100,
  true
);

let sevenDeadlySinsCover =
  "https://upload.wikimedia.org/wikipedia/en/c/c1/Nanatsu_no_Taizai_Volume_1.png";
let sevenDeadlySinsVol1 = new Book(
  sevenDeadlySinsCover,
  "Seven Deadly Sins Vol 1",
  "Nakaba Suzuki",
  77,
  false
);

function addBookToLibrary(book) {
  myLibrary.push(book);
}

addBookToLibrary(onePieceVol1);
addBookToLibrary(sevenDeadlySinsVol1);

// Function to create elements with class name
function createElementClassAppend(element, className, parent) {
  let attribute = document.createElement(element);
  if (className) {
    attribute.className = className;
  }
  parent.appendChild(attribute);
  return attribute;
}

function displayBooks(bookList) {
  for (let i = 0; i < bookList.length; i++) {
    let currentBook = bookList[i];
    let cards = createElementClassAppend("div", "book", container);

    // Displaying Contents of Book
    // 1. Book Cover
    let bookCover = createElementClassAppend("div", "book-cover", cards);
    bookCover.style.cssText = `background-image: url(${currentBook.cover}); background-size: cover; background-position: center;`;

    // 2. Book Content
    let bookContent = createElementClassAppend("div", "book-content", cards);

    // 2.1. Title
    let bookTitle = createElementClassAppend("h2", "title", bookContent);
    bookTitle.textContent = currentBook.title;

    // 2.2. Details
    let bookDetails = createElementClassAppend(
      "div",
      "book-details",
      bookContent
    );

    let bookAuthor = createElementClassAppend("p", "", bookDetails);
    bookAuthor.textContent = `Author: ${currentBook.author}`;

    let bookPages = createElementClassAppend("p", "", bookDetails);
    bookPages.textContent = `Pages: ${currentBook.pages}`;

    // 3. Read/Not Read Button
    let bookStatus = createElementClassAppend("button", "book-status", cards);
    if (currentBook.isRead) {
      bookStatus.id = "read";
      bookStatus.textContent = "Read";
    } else {
      bookStatus.id = "unread";
      bookStatus.textContent = "Not Read";
    }
  }
}

displayBooks(myLibrary);
