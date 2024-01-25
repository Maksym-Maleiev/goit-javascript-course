// * Objects array

const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Кобзар',
    author: 'Тарас Шевченко',
    rating: 8.51,
  },
  {
    title: 'Harry Potter',
    author: 'Joanne Rowling',
    rating: 7.75,
  },
];

for (const book of books) {
  // Об'єкт книги
  console.log(book);
  // Назва
  console.log(book.title);
  // Автор
  console.log(book.author);
  // Рейтинг
  console.log(book.rating);
}

// ** book names array
const bookNames = [];

for (const book of books) {
  bookNames.push(book.title);
}

console.log(bookNames);
// ["The Last Kingdom", "Кобзар", "Harry Potter"]

// ** average rating books
let totalRating = 0;

for (const book of books) {
  totalRating += book.rating;
}

const averageRating = (totalRating / books.length).toFixed(1);
console.log(averageRating);
// 8.2
