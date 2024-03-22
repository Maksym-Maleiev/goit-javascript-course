console.log('Класи');

/*
 * Оголошення класу
 */

// class User {
//   // Тіло класу
// }

// const mango = new User();
// console.log(mango);
// // {}

// const poly = new User();
// console.log(poly);
// // {}

/*
 * Конструктор класу
 */

// class User {
//   // Синтаксис оголошення методу класу
//   constructor(name, email) {
//     // Ініціалізація властивостей екземпляра
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User('Манго', 'mango@mail.com');
// console.log(mango);
// // { name: 'Манго', email: 'mango@mail.com'}

// const poly = new User('Полі', 'poly@mail.com');
// console.log(poly);
// // { name: 'Полі', email: 'poly@mail.com' }

/*
 * Об'єкт параметрів
 */

// class User {
//   // Деструктуризуємо об'єкт
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User({
//   name: 'Манго',
//   email: 'mango@mail.com',
// });
// console.log(mango);
// // {name: "Манго", email: "mango@mail.com"}

// const poly = new User({
//   name: 'Полі',
//   email: 'poly@mail.com',
// });
// console.log(poly);
// // { name: "Полі", email: "poly@mail.com"}

/*
 * Методи класу
 */

// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }

//   // Метод getEmail
//   getEmail() {
//     return this.email;
//   }

//   // Метод changeEmail
//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

/*
 * Приватні властивості
 */

// class User {
//   // Необов'язкове оголошення громадських властивостей
//   name;
//   // Обов'язкове оголошення приватних властивостей
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: 'Манго',
//   email: 'mango@mail.com',
// });
// mango.changeEmail('mango@supermail.com');
// console.log(mango.getEmail());
// // mango@supermail.com
// console.log(mango.#email);
// // Буде помилка, це приватна властивість

/*
 * Геттери та сетери
 */

// class User {
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   // Геттер email
//   get email() {
//     return this.#email;
//   }

//   // Сеттер email
//   // set email(newEmail) {
//   //   this.#email = newEmail;
//   // }

//   set email(newEmail) {
//     if (newEmail === '') {
//       console.error('Помилка! Пошта не може бути порожнім рядком!');
//       return;
//     }

//     this.#email = newEmail;
//   }
// }

// const mango = new User({ name: 'Манго', email: 'mango@mail.com' });
// console.log(mango.email);
// // mango@mail.com
// mango.email = 'mango@supermail.com';
// console.log(mango.email);
// // mango@supermail.com

/*
 * Статичні властивості
 */

// class User {
//   // Оголошення та ініціалізація статичної властивості
//   static Roles = {
//     ADMIN: 'admin',
//     EDITOR: 'editor',
//   };

//   #email;
//   #role;

//   constructor({ email, role }) {
//     this.#email = email;
//     this.#role = role;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({
//   email: 'mango@mail.com',
//   role: User.Roles.ADMIN,
// });

// console.log(mango.Roles);
// // undefined
// console.log(User.Roles);
// // { ADMIN: "admin", EDITOR: "editor"}

// console.log(mango.role);
// // "admin"
// mango.role = User.Roles.EDITOR;
// console.log(mango.role);
// // "editor"

/*
 * Статичні методи
 */

// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: 'mango@mail.com' });

// console.log(User.isEmailTaken('poly@mail.com'));
// console.log(User.isEmailTaken('mango@mail.com'));

/*
 * Наслідування класів
 */

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   // Тіло класу ContentEditor
// }

// const editor = new ContentEditor('mango@mail.com');
// console.log(editor);
// // {email: "mango@mail.com"}
// console.log(editor.email);
// // "mango@mail.com"

/*
 * Конструктор дочірнього класу
 */

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     // Виклик конструктора батьківського класу User
//     super(email);
//     this.posts = posts;
//   }
// }

// const editor = new ContentEditor({ email: 'mango@mail.com', posts: [] });
// console.log(editor);
// // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email);
// // 'mango@mail.com'

/*
 * Методи дочірнього класу
 */

class User {
  #email;

  constructor(email) {
    this.#email = email;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}

class ContentEditor extends User {
  constructor({ email, posts }) {
    super(email);
    this.posts = posts;
  }

  addPost(post) {
    this.posts.push(post);
  }
}

const editor = new ContentEditor({ email: 'mango@mail.com', posts: [] });
console.log(editor);
// { email: 'mango@mail.com', posts: [] }
console.log(editor.email);
// 'mango@mail.com'
editor.addPost('post-1');
console.log(editor.posts);
//['post-1']
