/*
 * METHOD 'EVERY()' AND 'SOME()'
 *
 * method 'every()'
 */

// Усі елементи більше чи рівні нулю? - так
console.log([1, 2, 3, 4, 5].every(value => value >= 0));
// true

// Усі елементи більше чи рівні нулю? - Ні
console.log([1, 2, 3, -10, 4, 5].every(value => value >= 0));
// false

/*
 * method 'some()'
 */

// Чи є хоча б один елемент більше або дорівнює нулю? - так
console.log([1, 2, 3, 4, 5].some(value => value >= 0));
// true

// Чи є хоча б один елемент більше або дорівнює нулю? - так
console.log([-7, -20, 3, -10, -14].some(value => value >= 0));
// true

// Чи є хоча б один елемент менше нуля? - Ні
console.log([1, 2, 3, 4, 5].some(value => value < 0));
// false

// Чи є хоча б один елемент менше нуля? - так
console.log([1, 2, 3, -10, 4, 5].some(value => value < 0));
// true

/*
 * array of objects
 */

const fruits = [
  { name: 'apples', amount: 100 },
  { name: 'bananas', amount: 0 },
  { name: 'grapes', amount: 50 },
];

// every поверне true тільки якщо всіх фруктів буде більше 0 штук
const allAvailable = fruits.every(fruit => fruit.amount > 0);
console.log(allAvailable);
// false

// some поверне true якщо хоча б одного фрукта буде більше ніж 0 штук
const anyAvailable = fruits.some(fruit => fruit.amount > 0);
console.log(anyAvailable);
// true
