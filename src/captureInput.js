import bookFactory from './bookFactory';
import displayBooks from './displayBooks';
import saveToLocalStorage from './saveToLocalStorage';

function captureInput(e) {
  e.preventDefault();
  // Read user input
  const bookName = document.querySelector('#bookName').value;
  const bookAuthor = document.querySelector('#bookAuthor').value;
  const bookPages = document.querySelector('#bookPages').value;
  const imgSrc = document.querySelector('#imgUrl').value;
  const uniqueId = Date.now();
  // Create Object to store user's input
  const book = bookFactory(bookName, bookAuthor, bookPages, imgSrc, uniqueId, false);
  console.log(book);
  // Save book in local storage
  saveToLocalStorage(book);
  document.forms[0].reset();
  displayBooks();
}

export default captureInput;
