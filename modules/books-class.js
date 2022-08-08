const bookStore = document.querySelector('.book-store');

const storedData = JSON.parse(localStorage.getItem('data'));
const bookList = storedData || [
  {
    title: 'Atomic Habits',
    author: 'James Clear',
  }, {
    title: 'Thinking fast and slow',
    author: 'Dean burnette',
  }, {
    title: 'Never Split the Difference',
    author: 'Chris Voss',
  }, {
    title: '12 Rules for Life',
    author: 'Jordan B. Peterson',
  },
];

class Books {
  constructor() {
    this.bookList = null;
  }

  display = (num) => {
    const titleH3 = document.createElement('h3');
    const authorH3 = document.createElement('h3');
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.classList.add('remove-btn');
    btn.textContent = 'remove';
    const data = bookList[num];
    const bookWrapper = document.createElement('div');
    bookWrapper.className = 'book-wrapper';
    titleH3.textContent = `"${data.title}"`;
    bookWrapper.appendChild(titleH3);
    const bySpan = document.createElement('span');
    bookWrapper.appendChild(bySpan);
    authorH3.textContent = data.author;
    bookWrapper.appendChild(authorH3);
    bySpan.textContent = 'by';
    bookWrapper.appendChild(btn);
    bookStore.appendChild(bookWrapper);
  }

  storeData = () => {
    localStorage.setItem('data', JSON.stringify(bookList));
  }

  add = () => {
    const bookTitle = document.getElementById('book-title');
    const bookAuthor = document.getElementById('book-author');
    const book = {};
    book.title = bookTitle.value;
    book.author = bookAuthor.value;
    bookList.push(book);
    this.display(bookList.length - 1);
    this.storeData();
    this.remove();
    bookTitle.value = '';
    bookAuthor.value = '';
  }

  remove = () => {
    const removeBtns = document.querySelectorAll('.remove-btn');
    removeBtns.forEach((btn, id) => {
      btn.addEventListener('click', (e) => {
        e.target.parentElement.remove();
        bookList.splice(id, 1);
        this.storeData();
      });
    });
  }
}

const books = new Books();

export { books, bookList };