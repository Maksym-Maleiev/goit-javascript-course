/*
 * Контекст виконання функції
 */

// // Петро біжить швидко, бо Петро намагається зловити поїзд.
// const petro = {
//   username: "Petro",
//   showName() {
//     console.log(petro.username);
//   },
// };

// petro.showName();

// // Петро біжить швидко, тому що він намагається зловити поїзд.
// const petro = {
//   username: "Petro",
//   showName() {
//     console.log(this.username);
//   },
// };

// petro.showName();

const bookShelf = {
  authors: ["Бернард Корнуелл", "Роберт Шеклі"],
  getAuthors() {
    return this.authors;
  },
  addAuthor(authorName) {
    this.authors.push(authorName);
  },
};

console.log(bookShelf.getAuthors());
// ["Бернард Корнуелл", "Роберт Шеклі"]
bookShelf.addAuthor("Лі Таніт");
console.log(bookShelf.getAuthors());
// ["Бернард Корнуелл", "Роберт Шеклі", "Лі Таніт"]
