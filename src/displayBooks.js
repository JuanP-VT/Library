import addEventListenerToCard from './addEventListenerToCard';
import clearScreen from './clearScreen';
import createBookCard from './img/createBookCard';

function displayBooks() {
  clearScreen();
  // Get local storage key and append each book to a DOM element
  const content = document.querySelector('#content');
  const myStorage = JSON.parse(localStorage.getItem('StoredBooks'));
  myStorage.forEach((element) => {
    const bookCard = createBookCard(element);
    content.appendChild(bookCard.cloneNode(true));
  });
  addEventListenerToCard();
}

export default displayBooks;
