/* eslint-disable no-param-reassign */

function loadBookCardImages(mode) {
  console.log('mode');
  if (mode === undefined) {
    const imageContainers = [...document.querySelectorAll('.imageContainer')];
    const myBooks = JSON.parse(localStorage.getItem('StoredBooks'));
    imageContainers.forEach((element) => {
      const dataReference = element.getAttribute('data-reference');
      // eslint-disable-next-line eqeqeq
      const indexReference = myBooks.findIndex((em) => em.id == dataReference);
      const myImage = new Image();
      myImage.src = myBooks[indexReference].src;
      myImage.classList.add('cover');
      element.append(myImage);
    });
  }
  if (mode === 'demo') {
    console.log('its in mode');
    const imageContainers = [...document.querySelectorAll('.imageContainer')];
    const myBooks = JSON.parse(localStorage.getItem('demoPage'));
    imageContainers.forEach((element) => {
      const dataReference = element.getAttribute('data-reference');
      // eslint-disable-next-line eqeqeq
      const indexReference = myBooks.findIndex((em) => em.id == dataReference);
      const myImage = new Image();
      myImage.src = myBooks[indexReference].src;
      myImage.classList.add('cover');
      element.append(myImage);
    });
  }
}
export default loadBookCardImages;
