// * Cycle for...in

/*
const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  rating: 8.38,
};

for (const key in book) {
  // Ключ
  console.log(key);
  // Значення якості з таким ключем
  console.log(book[key]);
}
*/

// * Method hasOwnProperty()
/*
const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = 'Манго';

console.log(dog); // {name: 'Манго'}
console.log(dog.name); // 'Манго'
console.log(dog.legs); // 4

//! ❌ Повертає true для всіх властивостей
console.log('name' in dog); // true
console.log('legs' in dog); // true

//TODO ✅ Повертає true лише для власних властивостей
console.log(dog.hasOwnProperty('name')); // true
console.log(dog.hasOwnProperty('legs')); // false
*/

/*
const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  rating: 8.38,
};

for (const key in book) {
  // Якщо це власна властивість – виконуємо тіло if
  if (book.hasOwnProperty(key)) {
    console.log(key);
    console.log(book[key]);
  }

  // Якщо це не власна властивість – нічого не робимо
}
*/

// * Method Object.keys()
/*
const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); 
// ['title', 'author', 'genres', 'rating']
*/

/*
const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  rating: 8.38,
};
const keys = Object.keys(book);

for (const key of keys) {
  // Ключ
  console.log(key);
  // Значення властивості
  console.log(book[key]);
}
*/

// * Method Object.values()
/*
const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys);
// ['title', 'author', 'rating']

const values = Object.values(book);
console.log(values);
// ['The Last Kingdom', 'Bernard Cornwell', 8.38]
*/

/*
const goods = {
  apples: 6,
  grapes: 3,
  bread: 4,
  cheese: 7,
};

const values = Object.values(goods);
// [6, 3, 4, 7]

let total = 0;

for (const value of values) {
  total += value;
}

console.log(total);
// 20
*/

// * Method Object.entries()

const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'rating']

const values = Object.values(book);
console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

const entries = Object.entries(book);
console.log(entries);
// [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]
