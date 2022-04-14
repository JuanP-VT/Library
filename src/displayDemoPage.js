/* eslint-disable eqeqeq */
import clearScreen from './clearScreen';
import createBookCard from './createBookCard';
import loadBookCardImages from './loadBookcardImages';
import demoPage from './demoPage.JSON';

function displayDemoPage() {
  clearScreen();
  localStorage.setItem('demoPage', JSON.stringify(demoPage));
  // Append each book to a DOM element
  const content = document.querySelector('#content');
  const myStorage = JSON.parse(localStorage.getItem('demoPage'));
  myStorage.forEach((element) => {
    const bookCard = createBookCard(element);
    content.appendChild(bookCard.cloneNode(true));
  });
  loadBookCardImages('demo');
}
export default displayDemoPage;
