/* eslint-disable import/no-cycle */
import changeViewStatus from './changeReadStatus';
import deleteBook from './deleteBook';

function addEventListenerToCard() {
  const eyeIcons = [...document.querySelectorAll('.eye')];
  eyeIcons.forEach((element) => {
    element.addEventListener('click', changeViewStatus);
  });
  const deleteIcons = [...document.querySelectorAll('.delete')];
  deleteIcons.forEach((element) => {
    element.addEventListener('click', deleteBook);
  });
}

export default addEventListenerToCard;
