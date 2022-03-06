let myLibrary = [];
const library = document.querySelector('#library')
document.addEventListener('DOMContentLoaded',() =>{
    document.getElementById('btn').addEventListener('click',addBook)
});


function addBook(ev){
    ev.preventDefault()
    let book = {
        id: Date.now(),
        name: document.getElementById('name').value,
        author: document.getElementById('author').value,
        pages: document.getElementById('pages').value,
        url: document.getElementById('imgurl').value,
        read : 'Not Read',
    }
    myLibrary.push(book);
    document.forms[0].reset();
    runArray()
}

function runArray(){
    reset()
myLibrary.forEach(element => {
//Creates bookcard
console.log(myLibrary)
//Bookcard header
    const BookCard = document.createElement('div')
    BookCard.classList.add('bookcard')
    const BookCardHeader = document.createElement('div')
    BookCardHeader.classList.add('bookcardheader')
    const iconEye = document.createElement('img')
    iconEye.src = ('./icons/eye.png')
    iconEye.classList.add('icon')
    iconEye.addEventListener('click', () => {
        if (element.read === 'Not Read'){
            element.read = 'Read'
            BookIsRead.textContent = element.read
        }
        else if (element.read === 'Read'){
            element.read ='Not Read'
            BookIsRead.textContent = element.read

        }

    })
    const deleteIcon = document.createElement('img')
    deleteIcon.src = './icons/delete.png'
    deleteIcon.classList.add('icon')
    deleteIcon.addEventListener('click',() =>{
        const targetBook = element.name
        const bookToDelete = myLibrary.findIndex(em => em.name === targetBook)
        myLibrary.splice(bookToDelete,1)
        runArray()

    })

//Cardimg
    const BookCardImg = document.createElement('div')
    BookCardImg.classList.add('bookcardimg')
    const BookCover = document.createElement('img')
    BookCover.src = (element.url)

    //Bookcard footer
    const BookCardFooter = document.createElement('div')
    BookCardFooter.classList.add('bookcardfooter')
    
    const BookName = document.createElement('p')
    BookName.textContent = element.name
    const BookAuthor = document.createElement('p')
    BookAuthor.textContent = element.author
    const BookPages = document.createElement('p')
    BookPages.textContent = element.pages
    const BookIsRead = document.createElement('p')
    BookIsRead.textContent = element.read
    BookIsRead.setAttribute



    BookCard.appendChild(BookCardHeader)
    BookCard.appendChild(BookCardImg)
    BookCard.appendChild(BookCardFooter)



    BookCardHeader.appendChild(deleteIcon)
    BookCardHeader.appendChild(iconEye)

    BookCardImg.appendChild(BookCover)

    BookCardFooter.appendChild(BookName)
    BookCardFooter.appendChild(BookAuthor)
    BookCardFooter.appendChild(BookPages)
    BookCardFooter.appendChild(BookIsRead)




    const library = document.querySelector('#library')
    library.appendChild(BookCard)
});
}

function reset(){
    while(library.firstChild){
        library.removeChild(library.firstChild)
    }
}

function addIcons(){
    document.querySelectorAll
}