let myLibrary = [];

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
        read : false,
    }

    //Create bookcard
    const bookcard = document.createElement('div');
    bookcard.classList.add('bookcard')
    bookcard.id = book.id
    const bookcardheader = document.createElement('div');
    bookcardheader.classList.add('bookcardheader')


    const iconSee = document.createElement('img')
    iconSee.src = "./icons/eye.png"
    iconSee.classList.add('icon')

    
    const iconDelete = document.createElement('img')
    //Inserts icon with event to remove this div and object
    iconDelete.src ='./icons/delete.png'
    iconDelete.addEventListener('click',() =>{
        const el = document.getElementById(book.id)
        const removeIndex = myLibrary.map(item => item.id).indexOf(book.id);
        ~removeIndex && myLibrary.splice(removeIndex, 1);
        el.remove();
    })
    iconDelete.classList.add('icon')
    bookcardheader.appendChild(iconSee)
    bookcardheader.appendChild(iconDelete)

    //Adding cover if one is submitted
    const bookcardimg = document.createElement('div');
    bookcardimg.classList.add('bookcardimg')
    const cover = document.createElement('img')
    cover.src = book.url;
    bookcardimg.appendChild(cover);

    const bookcardfooter = document.createElement('div');
    bookcardfooter.classList.add('bookcardfooter')
    const bookname = document.createElement('p')
    bookname.classList.add('bookname')
    bookname.textContent = book.name;
    const bookauthor = document.createElement('p')
    bookauthor.classList.add('bookauthor')
    bookauthor.textContent = book.author;
    const bookpages = document.createElement('p')
    bookpages.textContent = book.pages;
    const bookread = document.createElement('p')
    bookread.textContent ='Not read'
    bookcardfooter.appendChild(bookname)
    bookcardfooter.appendChild(bookauthor)
    bookcardfooter.appendChild(bookpages)
    bookcardfooter.appendChild(bookread)
    bookcard.appendChild(bookcardheader)
    bookcard.appendChild(bookcardimg)
    bookcard.appendChild(bookcardfooter)
    const library = document.querySelector('#library')
    library.appendChild(bookcard)
    //Save object
    myLibrary.push(book);
    document.forms[0].reset();
}








