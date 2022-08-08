import { books, bookList } from './modules/books-class.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

for (let i = 0; i < bookList.length; i += 1) {
  books.display(i);
}
books.remove();

const addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', () => {
  books.add();
});

const DateAndTime = document.querySelector('.date-and-time');
DateAndTime.textContent = DateTime.now();

const booksSection = document.querySelector('.book-list');
const addSection = document.querySelector('.form');
const contactSection = document.querySelector('.contact-info');
const booksLink = document.getElementById('list-link');
const addLink = document.getElementById('add-link');
const contactLink = document.getElementById('contact-link');

booksLink.addEventListener('click', () => {
  booksSection.classList.remove('hidden');
  addSection.classList.add('hidden');
  contactSection.classList.add('hidden');
  booksLink.style.color = 'rgb(15, 15, 161)';
  addLink.style.color = 'black';
  contactLink.style.color = 'black';
});

addLink.addEventListener('click', () => {
  booksSection.classList.add('hidden');
  addSection.classList.remove('hidden');
  contactSection.classList.add('hidden');
  booksLink.style.color = 'black';
  addLink.style.color = 'rgb(15, 15, 161)';
  contactLink.style.color = 'black';
});

contactLink.addEventListener('click', () => {
  booksSection.classList.add('hidden');
  addSection.classList.add('hidden');
  contactSection.classList.remove('hidden');
  booksLink.style.color = 'black';
  addLink.style.color = 'black';
  contactLink.style.color = 'rgb(15, 15, 161)';
});