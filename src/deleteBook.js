/* eslint-disable import/no-cycle */
import displayBooks from './displayBooks';
import displayFinishedBooks from './displayFinishedBooks';
import displayUnfinishedBooks from './displayUnfinishedBooks';

function deleteBook() {
  const mode = this.getAttribute('data-mode');
  console.log(mode);
  const dataReference = this.getAttribute('data-reference');
  // Get local storage item
  const myBooks = JSON.parse(localStorage.getItem('StoredBooks'));
  // eslint-disable-next-line eqeqeq
  const targetIndex = myBooks.findIndex((em) => em.id == dataReference);
  // Delete target item
  myBooks.splice(targetIndex, 1);
  localStorage.setItem('StoredBooks', JSON.stringify(myBooks));
  if (mode === '' || mode === null || mode === undefined) {
    displayBooks();
  }
  if (mode === 'finished') {
    displayFinishedBooks();
  }
  if (mode === 'unfinished') {
    displayUnfinishedBooks();
  }
}

export default deleteBook;
