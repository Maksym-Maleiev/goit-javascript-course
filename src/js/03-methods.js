console.log('Методи функцій');

/*
 * Метод call()
 */

// // foo.call(obj, arg1, arg2, ...)

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: 'Манго',
// };
// const poly = {
//   username: 'Полі',
// };

// greetGuest.call(mango, 'Ласкаво просимо');
// // Ласкаво просимо, Манго.
// greetGuest.call(poly, 'З приїздом');
// // З приїздом, Полі.

/*
 * Метод apply
 */

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: 'Манго',
// };
// const poly = {
//   username: 'Полі',
// };

// greetGuest.apply(mango, ['Ласкаво просимо']);
// // Ласкаво просимо, Манго.
// greetGuest.apply(poly, ['З приїздом']);
// // З приїздом, Полі.

/*
 * Метод bind()
 */

// // foo.bind(obj, arg1, arg2, ...)

// function greet(clientName) {
//   return `${clientName}, ласкаво просимо до "${this.service}".`;
// }

// const steam = {
//   service: 'Steam',
// };
// const steamGreeter = greet.bind(steam, 'Манго');
// console.log(steamGreeter());
// // "Манго, ласкаво просимо в "Steam"."

// const gmail = {
//   service: 'Gmail',
// };
// const gmailGreeter = greet.bind(gmail, 'Полі');
// console.log(gmailGreeter());
// // "Полі, ласкаво просимо до Gmail".

/*
 * bind() та методи об'єкта
 */

const customer = {
  firstName: 'Jacob',
  lastName: 'Mercer',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeMessage(callback) {
  // callback() - це виклик методу getFullName без об'єкта
  console.log(`Обробляємо заявку від ${callback()}.`);
}

makeMessage(customer.getFullName.bind(customer));
// Обробляємо заявку від Jacob Mercer.
