/*
const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  isPublic: true,
  rating: 8.38,
};

console.log(book);
*/

/*
const user = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: {
    country: 'Jamaica',
    city: 'Ocho Rios',
  },
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

console.log(user);
*/

/*
const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  isPublic: true,
  rating: 8.38,
};

const bookTitle = book.title;
console.log(bookTitle); // 'The Last Kingdom'

const bookGenres = book.genres;
console.log(bookGenres); // ['historical prose', 'adventurs']

const bookPrice = book.price;
console.log(bookPrice); // undefined
*/

/*
const user = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: {
    country: 'Jamaica',
    city: 'Ocho Rios',
  },
  hobbies: ['swiming', 'music', 'sci-fi'],
};

const location = user.location;
console.log(location); // Объект location

const country = user.location.country;
console.log(country); // 'Jamaica'

const hobbies = user.hobbies;
console.log(hobbies); // ['swiming', 'music', 'sci-fi']

const firstHobby = user.hobbies[0];
console.log(firstHobby); // 'swiming'

const numberOfHobbies = user.hobbies.length;
console.log(numberOfHobbies); // 3
*/

/*
const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  isPublic: true,
  rating: 8.38,
};

const bookTitle = book['title'];
console.log(bookTitle); // 'The Last Kingdom'

const bookGenres = book['genres'];
console.log(bookGenres); // ['historical prose', 'adventurs']

const propKey = 'author';
const bookAuthor = book[propKey];
console.log(bookAuthor); // 'Bernard Cornwell'
*/

/*
const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  isPublic: true,
  rating: 8.38,
};

book.rating = 9;
book.isPublic = false;
book.genres.push('драма');

console.log(book.rating); // 9
console.log(book.isPublic); // false
console.log(book.genres); // ['historical prose', 'adventures', 'драма']
*/

/*
const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  isPublic: true,
  rating: 8.38,
};

book.pageCount = 836;
book.originalLanguage = 'en';
book.translations = ['ua', 'pl'];

console.log(book.pageCount); // 836
console.log(book.originalLanguage); // 'en'
console.log(book.translations); // ['ua', 'pl']
*/

/*
const name = 'Henry Cibola';
const age = 25;

const user = {
  name,
  age,
};

console.log(user.name); // "Henry Cibola"
console.log(user.age); // 25
*/

// 1.
/*
const propName = 'name';
const user = {
  age: 25,
};

user[propName] = 'Henry Cibola';
console.log(user.name); // 'Henry Cibola'
*/

// 2.
/*
const propName = 'name';
const user = {
  age: 25,
  // Ім'я цієї властивості буде взято зі значення змінної propName
  [propName]: 'Henry Cibola',
};

console.log(user.name); // 'Henry Cibola'
*/

/*
// ✅ Логічно та синтаксично згруповані сутності
const bookShelf = {
  books: ['The Last Kingdom', 'Dream Guardian'],
  // Це метод об'єкту
  getBooks() {
    console.log('Цей метод повертатиме всі книги - властивість books');
  },
  // Це метод об'єкту
  addBook(bookName) {
    console.log('Цей метод буде додавати нову книгу як books');
  },
};

// Виклики методів
bookShelf.getBooks();
bookShelf.addBook('Нова книга');
*/

/*
// ❌ Слабопов'язані, незалежні сутності
const books = [];
function getBooks() {}
function addBook() {}
*/

const bookShelf = {
  books: ['The Last Kingdom'],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  },
  removeBook(bookName) {
    const bookIndex = this.books.indexOf(bookName);
    this.books.splice(bookIndex, 1);
  },
};

console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
bookShelf.addBook('The Mist');
bookShelf.addBook('Dream Guardian');
console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
bookShelf.removeBook('The Mist');
console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']
