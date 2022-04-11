// When add-btn div is clicked make form appear
const newbook = document.querySelector('.new-book');

const displayForm = () => {
    if(newbook.style.display == 'block'){
        newbook.style.display = 'none';
    }
    else{
        newbook.style.display = 'block';
    }
};

// book object
function Book(title, author, pages, status, rating){
    this.title=title;
    this.author=author;
    this.pages= 'Pages: ' + pages;
    this.status=status;
    this.rating=rating;
}


// Add a new book entry to list when addBook() runs
const booklist = document.querySelector('.book-list');
const newTitle = document.querySelector('#new-title');
const newAuthor = document.querySelector('#new-author');
const newPages = document.querySelector('#new-pages');
const newStatus = document.querySelector('#new-status');
const newRating = document.querySelector('#new-rating');


const addBook = () => {
    let book1 = new Book(newTitle.value, newAuthor.value, newPages.value, newStatus.value, newRating.value);

    //Create the card for the book added
    createCard(book1);
    //hide the add book form
    displayForm();
    //Clear the add book form
    newTitle.value = '';
    newAuthor.value = '';
    newPages.value = '';
    newStatus.value = '';
    newRating.value = '';
}

const createCard = (bookObj) => {
    this.book=bookObj;
    // create card for book list item
    const bookListItem = document.createElement('div');
    bookListItem.classList.add('book-list-item');
    // create book details
    //title
    const bookTitle = document.createElement('div');
    bookTitle.classList.add('book-title');
    bookTitle.textContent = book.title;
    //author
    const bookAuthor = document.createElement('div');
    bookAuthor.classList.add('book-author');
    bookAuthor.textContent = book.author;
    //pages
    const bookPages = document.createElement('div');
    bookPages.classList.add('book-pages');
    bookPages.textContent = book.pages;
    //status
    const bookStatus = document.createElement('div');
    bookStatus.classList.add('book-status');
    bookStatus.textContent = book.status;
    //rating
    const bookRating = document.createElement('div');
    bookRating.classList.add('book-rating');
    bookRating.textContent = book.rating;
    //ConsoleLog for testing
    console.log(book);
    //Create the book card
    booklist.appendChild(bookListItem);
    bookListItem.appendChild(bookTitle);
    bookListItem.appendChild(bookAuthor);
    bookListItem.appendChild(bookPages);
    bookListItem.appendChild(bookStatus);
    bookListItem.appendChild(bookRating);
}





