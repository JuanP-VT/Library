/* eslint-disable no-param-reassign */
import placeHolder from './img/noCover.jpg';

function loadBookCardImages() {
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
  // Set Placeholders for images with no valid src
  const allImages = [...document.querySelectorAll('.cover')];
  allImages.forEach((element) => {
    const imgSrc = element.getAttribute('src');
    if (imgSrc === '' || imgSrc === undefined) {
      element.src = placeHolder;
    }
  });
}
export default loadBookCardImages;
