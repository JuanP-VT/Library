import bookFactory from './bookFactory';
import displayBooks from './displayBooks';
import resetForm from './resetForm';
import saveToLocalStorage from './saveToLocalStorage';
import setErrorFor from './setErrorFor';
import setSuccesFor from './setSuccesFor';

function captureInput(e) {
  e.preventDefault();
  // Read user input
  const bookName = document.querySelector('#bookName');
  const bookAuthor = document.querySelector('#bookAuthor');
  const bookPages = document.querySelector('#bookPages').value;
  const imgSrc = document.querySelector('#imgUrl').value;
  const uniqueId = Date.now();
  // Validation
  if (bookName.value === '') {
    setErrorFor(bookName, 'Please Submit A Name');
    return;
  } if (bookName.value !== '') {
    setSuccesFor(bookName);
  }
  if (bookAuthor.value === '') {
    setErrorFor(bookAuthor, 'Please Submit Books Author');
    return;
  }
  // Create Object to store user's input
  const book = bookFactory(bookName.value, bookAuthor.value, bookPages, imgSrc, uniqueId, false);
  console.log(book);
  // Save book in local storage

  saveToLocalStorage(book);
  resetForm();
  displayBooks();
}

export default captureInput;
