let myLibrary = [];
function Book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
}
// Add a sample book to the library
myLibrary.push(new Book("Lord of the Rings: Fellowship of the Ring", "JRR Tolkien", false));

function displayBooks() {
    const catalogContainer = document.querySelector('.catalog-container');

    if(catalogContainer){
        catalogContainer.innerHTML = ''; // Clear existing books
    myLibrary.forEach((book, index) => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = `
            <div class="book-info">
                <h1>${book.title}</h1>
                <p>By: ${book.author}</p>
            </div>
            <div class="read-status">${book.read ? 'Read' : 'Not Read'}</div>
            <div class="remove-book" data-index="${index}">Remove</div>
        `;
        catalogContainer.appendChild(bookDiv);

        const readStatus = bookDiv.querySelector('.read-status');
        updateReadStatusStyle(readStatus);

        // Adding click event listener to toggle read status
        readStatus.addEventListener('click', () => {
            book.read = !book.read; // Toggle the 'read' property of the book
            readStatus.textContent = book.read ? 'Read' : 'Not Read';
            updateReadStatusStyle(readStatus);
        });
    });
    }
    
}
displayBooks();
function updateReadStatusStyle(readStatus) {
    if (readStatus.textContent === 'Not Read') {
        readStatus.style.backgroundColor = 'red';
    } else {
        readStatus.style.backgroundColor = '#00ff00';
    }
}
//dialog box popup
if(document.querySelector('.add-book')){
    document.querySelector('.add-book').addEventListener('click', () => {
        document.getElementById('book-dialog').showModal();
    });
}
if(document.getElementById('book-form')){
    document.getElementById('book-form').addEventListener('submit', function(event) {
        event.preventDefault();
    
        const title = document.getElementById('book-title').value;
        const author = document.getElementById('book-author').value;
        const read = document.getElementById('book-read').checked;
    
        addBookToLibrary(title, author, read);
        displayBooks();
    
        this.reset();
        document.getElementById('book-dialog').close();
    });
}
function addBookToLibrary(title, author, read) {
    const book = new Book(title, author, read);
    myLibrary.push(book);
}
//event listener for book removal
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-book')) {
        const index = event.target.getAttribute('data-index');
        myLibrary.splice(index, 1);
        displayBooks();
    }
});
//event listener for home card link
let cardLinkHome = document.querySelector('.card-links-home');
if(cardLinkHome !== null){
    cardLinkHome.addEventListener('click', function() {
        window.location.href='index.html';
    })
}
//event listener for catalog card link
let cardLinkCatalog = document.querySelector('.card-links-catalog');
if (cardLinkCatalog !== null){
    cardLinkCatalog.addEventListener('click', function(){
        window.location.href='catalog.html';
    })
}

  