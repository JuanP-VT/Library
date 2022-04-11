import captureInput from './captureInput';
import initStorage from './initStorage';

function initPage() {
  // Create key in local storage to save books
  initStorage();
  // Add event listener to capture user input
  const mainForm = document.querySelector('#mainForm');
  mainForm.addEventListener('submit', captureInput);
}

export default initPage;
