
const cardHolder = document.getElementById('card-holder');
const addBookButton = document.querySelector('.addBookButton');
const creationForm = document.querySelector('.creation-form');
const overlay = document.querySelector('.overlay');
const submitBookButton = document.querySelector('#submitBookButton');
let removeButtons = document.querySelectorAll('.remove-button');

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


let myLibrary = [];

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
    i = 0;
    myLibrary.forEach(book => {

        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data', i);

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

        const removeButton = document.createElement('button')
        removeButton.classList.add('remove-button');
        removeButton.textContent = 'Remove';
        removeButton.setAttribute('data', i);
        card.appendChild(removeButton);

        cardHolder.appendChild(card);

        i++;
    })

    removeButtons = document.querySelectorAll('.remove-button');

    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonIndex = button.getAttribute('data');
            console.log(buttonIndex);

            myLibrary.splice(buttonIndex, 1);
            clearLibrary();
            displayLibrary();
        })
    })
}

function clearLibrary() {
    while (cardHolder.firstChild) {
        cardHolder.removeChild(cardHolder.firstChild);
    }
}

addBookButton.onclick = function () {
    creationForm.classList.remove('invisible');
    overlay.classList.remove('invisible');
}

submitBookButton.onclick = function (event) {
    event.preventDefault();

    addBookToLibrary(addBookForm.title.value, addBookForm.author.value, addBookForm.pages.value, addBookForm.isRead.checked);
    clearLibrary();
    displayLibrary();
    addBookForm.clearForm();
    creationForm.classList.add('invisible');
    overlay.classList.add('invisible');

}

overlay.addEventListener('click', () => {
    overlay.classList.add('invisible');
    creationForm.classList.add('invisible');
})


displayLibrary();