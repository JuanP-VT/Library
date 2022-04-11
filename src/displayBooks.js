// eslint-disable-next-line import/no-cycle
import addEventListenerToCard from './addEventListenerToCard';
import clearScreen from './clearScreen';
import createBookCard from './createBookCard';
import loadBookCardImages from './loadBookcardImages';

function displayBooks() {
  clearScreen();
  // Get local storage key and append each book to a DOM element
  // If local storage is empty
  if (localStorage.getItem('StoredBooks') == '') {
    return;
  }
  const content = document.querySelector('#content');
  const myStorage = JSON.parse(localStorage.getItem('StoredBooks'));
  myStorage.forEach((element) => {
    const bookCard = createBookCard(element);
    content.appendChild(bookCard.cloneNode(true));
  });
  addEventListenerToCard();
  loadBookCardImages();
}

export default displayBooks;
