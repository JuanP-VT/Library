/* eslint-disable import/no-cycle */
import addEventListenerToCard from './addEventListenerToCard';
import loadBookCardImages from './loadBookcardImages';
import clearScreen from './clearScreen';
import createBookCard from './createBookCard';

function displayFinishedBooks() {
  clearScreen();
  // Get local storage key and append each book to a DOM element
  // If local storage is empty
  if (localStorage.getItem('StoredBooks') === '') {
    return;
  }
  const content = document.querySelector('#content');
  const myStorage = JSON.parse(localStorage.getItem('StoredBooks'));
  myStorage.forEach((element) => {
    if (element.read === true) {
      const bookCard = createBookCard(element, 'finished');
      content.appendChild(bookCard.cloneNode(true));
    }
  });
  addEventListenerToCard('finished');
  loadBookCardImages();
}
export default displayFinishedBooks;
