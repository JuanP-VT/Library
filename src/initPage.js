import captureInput from './captureInput';
import initStorage from './initStorage';

function initPage() {
  // Create key in local storage to save books
  initStorage();
  // Add event listener to capture user input
  const submitBtn = document.querySelector('#submit');
  submitBtn.addEventListener('click', captureInput);
}

export default initPage;
