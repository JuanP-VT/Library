/* eslint-disable eqeqeq */
function loadBookCardImages() {
  const imageContainers = [...document.querySelectorAll('.imageContainer')];
  const myBooks = JSON.parse(localStorage.getItem('StoredBooks'));
  imageContainers.forEach((element) => {
    const dataReference = element.getAttribute('data-reference');
    const indexReference = myBooks.findIndex((em) => em.id == dataReference);
    const myImage = new Image();
    myImage.src = myBooks[indexReference].src;
    myImage.classList.add('cover');
    element.append(myImage);
  });
}
export default loadBookCardImages;
