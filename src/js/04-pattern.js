// * Var-1
/*
function doStuffWithBook(book) {
  // Робимо щось із властивостями об'єкта
  console.log(book.title);
  console.log(book.numberOfPages);
  // І так далі
}

// ✅ Все зрозуміло
doStuffWithBook({
  title: 'The Last Kingdom',
  numberOfPages: 736,
  downloads: 10283,
  Rating: 8.38,
  isPublic: true,
});
*/

// * Var-2
/*
function doStuffWithBook(book) {
  const { title, numberOfPages, downloads, rating, isPublic } = book;
  console.log(title);
  console.log(numberOfPages);
  // І так далі
}

doStuffWithBook({
  title: 'The Last Kingdom',
  numberOfPages: 736,
  downloads: 10283,
  Rating: 8.38,
  isPublic: true,
});
*/

// * Var-3
function doStuffWithBook({
  title,
  numberOfPages,
  downloads,
  rating,
  isPublic,
}) {
  console.log(title);
  console.log(numberOfPages);
  // І так далі
}

doStuffWithBook({
  title: 'The Last Kingdom',
  numberOfPages: 736,
  downloads: 10283,
  Rating: 8.38,
  isPublic: true,
});
