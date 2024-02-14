// * ARROW FUNCTIONS

/*
// Звичайне оголошення функції
function classicAdd(a, b, c) {
  return a + b + c;
}

// Теж саме як стрілочна функція
const arrowAdd = (a, b, c) => {
  return a + b + c;
};

// Якщо параметр один

const add = a => {
  return a + 5;
};

// Якщо параметрів немає

const greet = () => {
  console.log('Hello!');
};
*/

// ** IMPLICIT RETURN

/*
const addEx = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};

console.log(addEx(1, 2, 3));

const addIm = (a, b, c) => a + b + c;

console.log(addIm(1, 2, 3));
*/

/*
// До
function classicAdd(a, b, c) {
  return a + b + c;
}

// Після
const arrowAdd = (a, b, c) => a + b + c;
*/

// ** PSEUDO-ARRAY 'arguments'

/*
const add = (...args) => {
  console.log(args);
};

add(1, 2, 3); // [1, 2, 3]
*/

// ** ARROW FUNCTIONS AS CALLBACKS

/*
const numbers = [5, 10, 15, 20, 25];

// Оголошення функції
numbers.forEach(function (number, index) {
  console.log(`Індекс ${index}, значення ${number}`);
});

// Анонімна стрілочна функція
numbers.forEach((number, index) => {
  console.log(`Індекс ${index}, значення ${number}`);
});
*/

const numbers = [5, 10, 15, 20, 25];

const logMessage = (number, index) => {
  console.log(`Індекс ${index}, значення ${number}`);
};

numbers.forEach(logMessage);
