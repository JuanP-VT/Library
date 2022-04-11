import captureInput from './captureInput';
import displayBooks from './displayBooks';
import displayFinishedBooks from './displayFinishedBooks';
import displayUnfinishedBooks from './displayUnfinishedBooks';
import initStorage from './initStorage';

function initPage() {
  // Create key in local storage to save books
  initStorage();
  // Add event listener to capture user input
  const mainForm = document.querySelector('#mainForm');
  mainForm.addEventListener('submit', captureInput);
  // Add event listener to summary section
  const allBtn = document.querySelector('#all');
  allBtn.addEventListener('click', displayBooks);
  const finishBtn = document.querySelector('#finished');
  finishBtn.addEventListener('click', displayFinishedBooks);
  const unFinishedBtn = document.querySelector('#unfinished');
  unFinishedBtn.addEventListener('click', displayUnfinishedBooks);
}

export default initPage;
