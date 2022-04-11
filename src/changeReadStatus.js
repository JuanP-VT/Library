/* eslint-disable import/no-cycle */
import displayBooks from './displayBooks';
import displayFinishedBooks from './displayFinishedBooks';
import displayUnfinishedBooks from './displayUnfinishedBooks';

function changeViewStatus(mode) {
  const btnMode = mode.target.getAttribute('data-mode');
  console.log(btnMode);
  const dataReference = this.getAttribute('data-reference');
  console.log(dataReference);
  // Get local storage item
  const myBooks = JSON.parse(localStorage.getItem('StoredBooks'));
  console.log(myBooks);
  // eslint-disable-next-line eqeqeq
  const targetIndex = myBooks.findIndex((em) => em.id == dataReference);
  // Change target's read status
  if (myBooks[targetIndex].read === true) {
    myBooks[targetIndex].read = false;
  } else if (myBooks[targetIndex].read === false) {
    myBooks[targetIndex].read = true;
  }
  console.log(myBooks[targetIndex].read);
  localStorage.setItem('StoredBooks', JSON.stringify(myBooks));
  if (btnMode === '' || btnMode === null || btnMode === undefined) {
    displayBooks();
  }
  if (btnMode === 'finished') {
    displayFinishedBooks();
  }
  if (btnMode === 'unfinished') {
    displayUnfinishedBooks();
  }
}

export default changeViewStatus;
