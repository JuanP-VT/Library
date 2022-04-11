/* eslint-disable import/no-cycle */
import addEventListenerToCard from './addEventListenerToCard';
import loadBookCardImages from './loadBookcardImages';
import clearScreen from './clearScreen';
import createBookCard from './createBookCard';

function displayUnfinishedBooks() {
  clearScreen();
  // Get local storage key and append each book to a DOM element
  // If local storage is empty
  if (localStorage.getItem('StoredBooks') === '') {
    return;
  }
  const content = document.querySelector('#content');
  const myStorage = JSON.parse(localStorage.getItem('StoredBooks'));
  myStorage.forEach((element) => {
    if (element.read === false) {
      const bookCard = createBookCard(element, 'unfinished');
      content.appendChild(bookCard.cloneNode(true));
    }
  });
  addEventListenerToCard('unfinished');
  loadBookCardImages();
}

export default displayUnfinishedBooks;
