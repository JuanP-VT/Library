import clearScreen from './clearScreen';
import createBookCard from './img/createBookCard';

function displayBooks() {
  clearScreen();
  // Get local storage key and append each book to a DOM element
  const content = document.querySelector('#content');
  const myStorage = JSON.parse(localStorage.getItem('StoredBooks'));
  myStorage.forEach((element) => {
    const bookCard = createBookCard(element);
    console.log(bookCard);
    content.appendChild(bookCard.cloneNode(true));
  });
}

export default displayBooks;
