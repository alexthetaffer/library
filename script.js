
const cardHolder = document.getElementById('card-holder');
const addBookButton = document.querySelector('.addBookButton');
const creationForm = document.querySelector('.creation-form');
const formContainer = document.querySelector('.form-container');
const submitBookButton = document.querySelector('#submitBookButton');

const addBookForm = {
    title: document.querySelector('#title'),
    author: document.querySelector('#author'),
    pages: document.querySelector('#pages'),
    isRead: document.querySelector('#isRead'),

    clearForm: function () {
        this.title.value = '';
        this.author.value = '';
        this.pages.value = '';
        this.isRead.checked = false;
    }
}


const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
    myLibrary.push(new Book(title, author, pages, isRead));
}

addBookToLibrary('The adventures of Tom Sawyer', 'Mark Twain', 300, true);
addBookToLibrary('War and peace', 'Lev Tolstoy', 1000, false);

function displayLibrary() {
    myLibrary.forEach(book => {
        const card = document.createElement('div');
        card.classList.add('card');

        const title = document.createElement('h1');
        title.textContent = book.title;
        card.appendChild(title);

        const author = document.createElement('p');
        author.textContent = book.author;
        card.appendChild(author);

        const pages = document.createElement('p');
        pages.textContent = book.pages + ' pages';
        card.appendChild(pages);

        const isRead = document.createElement('input');
        label = document.createElement('label');
        label.textContent = 'Read';
        isRead.type = 'checkbox';
        if (book.isRead) {
            isRead.setAttribute('checked', 'checked')
        }
        label.appendChild(isRead);
        card.appendChild(label);

        cardHolder.appendChild(card);
    })
}

function clearLibrary() {
    while (cardHolder.firstChild) {
        cardHolder.removeChild(cardHolder.firstChild);
    }
}

addBookButton.onclick = function () {
    formContainer.classList.remove('invisible');
}

submitBookButton.onclick = function (event) {
    event.preventDefault();

    addBookToLibrary(addBookForm.title.value, addBookForm.author.value, addBookForm.pages.value, addBookForm.isRead.checked);
    clearLibrary();
    displayLibrary();
    addBookForm.clearForm();
    formContainer.classList.add('invisible');


}

displayLibrary();

