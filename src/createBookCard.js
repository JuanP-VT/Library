import {
  card, eye, deleteImg, $bookName, $bookAuthor,
  $bookPages, $bookRead, imageContainer,
} from './domContent';

function createBookCard(element, mode) {
  // Change text content of the card
  deleteImg.setAttribute('data-reference', element.id);
  eye.setAttribute('data-reference', element.id);
  $bookName.textContent = element.name;
  $bookAuthor.textContent = element.author;
  $bookPages.textContent = element.pages;
  imageContainer.setAttribute('data-reference', element.id);
  if (element.read === false) {
    $bookRead.textContent = 'Not Read Yet';
  } else if (element.read === true) {
    $bookRead.textContent = 'Book Completed';
  }
  if (mode === null || mode === '' || mode === undefined) {
    eye.setAttribute('data-mode', '');
  }
  if (mode === 'finished') {
    eye.setAttribute('data-mode', 'finished');
  }
  if (mode === 'unfinished') {
    eye.setAttribute('data-mode', 'unfinished');
  }
  return card;
}
export default createBookCard;
