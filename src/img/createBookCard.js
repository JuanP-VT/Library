import {
  card, eye, deleteImg, $bookName, $bookAuthor,
  $bookPages, $bookRead,
} from '../domContent';

function createBookCard(element) {
  console.log(element);
  deleteImg.setAttribute('data-reference', element.id);
  eye.setAttribute('data-reference', element.id);
  $bookName.textContent = element.name;
  $bookAuthor.textContent = element.author;
  $bookPages.textContent = element.pages;
  console.log(element.read);
  if (element.read === false) {
    $bookRead.textContent = 'Not read';
  } else if (element.read === true) {
    $bookRead.textContent = 'Book Completed';
  }
  return card;
}
export default createBookCard;
