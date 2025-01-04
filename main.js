const myLibrary = [];
let container = document.querySelector(".container");

function Book(cover, title, author, pages, isRead) {
  this.cover = cover;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

let sevenDeadlySinsCover =
  "https://upload.wikimedia.org/wikipedia/en/c/c1/Nanatsu_no_Taizai_Volume_1.png";
let sevenDeadlySinsVol1 = new Book(
  sevenDeadlySinsCover,
  "Seven Deadly Sins Vol 1",
  "Nakaba Suzuki",
  77,
  true
);

function addBookToLibrary(book) {
  myLibrary.push(book);
}

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

function displayBooks(bookList, startCount = 0) {
  for (let i = startCount; i < bookList.length; i++) {
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

    bookStatus.addEventListener("click", () => {
      if (bookStatus.id == "read") {
        bookStatus.id = "unread";
        bookStatus.textContent = "Not Read";
      } else {
        bookStatus.id = "read";
        bookStatus.textContent = "Read";
      }
    });
  }
}

displayBooks(myLibrary);

// One Piece Collection 7 Books
let onePieceVol1 = new Book(
  "./assets/onepiecevol1.jpg",
  "One Piece Vol 1",
  "Eiichiro Oda",
  100,
  false
);

let onePieceVol2 = new Book(
  "./assets/onepiecevol2.jpg",
  "One Piece Vol 2",
  "Eiichiro Oda",
  100,
  true
);

let onePieceVol3 = new Book(
  "./assets/onepiecevol3.jpg",
  "One Piece Vol 3",
  "Eiichiro Oda",
  100,
  false
);

let onePieceVol4 = new Book(
  "./assets/onepiecevol4.jpg",
  "One Piece Vol 4",
  "Eiichiro Oda",
  100,
  true
);

let onePieceVol5 = new Book(
  "./assets/onepiecevol5.jpg",
  "One Piece Vol 5",
  "Eiichiro Oda",
  100,
  false
);

let onePieceVol6 = new Book(
  "./assets/onepiecevol6.jpg",
  "One Piece Vol 6",
  "Eiichiro Oda",
  100,
  true
);

let onePieceVol7 = new Book(
  "./assets/onepiecevol7.jpg",
  "One Piece Vol 7",
  "Eiichiro Oda",
  100,
  false
);

let addOnePieceCollection = document.getElementById("addOnePiece");

addOnePieceCollection.addEventListener("click", () => {
  let count = myLibrary.length;
  addBookToLibrary(onePieceVol1);
  addBookToLibrary(onePieceVol2);
  addBookToLibrary(onePieceVol3);
  addBookToLibrary(onePieceVol4);
  addBookToLibrary(onePieceVol5);
  addBookToLibrary(onePieceVol6);
  addBookToLibrary(onePieceVol7);
  displayBooks(myLibrary, count);
  document.getElementById("addOnePiece").disabled = true;
  addOnePieceCollection.style.cssText = `filter: none;`;
});
