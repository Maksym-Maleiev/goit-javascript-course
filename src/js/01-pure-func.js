// * PURE FUNCTIONS
/*
const dirtyMultiply = (array, value) => {
  for (let i = 0; i < array.length; i += 1) {
    array[i] = array[i] * value;
  }
};

const numbers = [1, 2, 3, 4, 5];
dirtyMultiply(numbers, 2);
// Відбулася мутація вихідних даних – масиву numbers
console.log(numbers); // [2, 4, 6, 8, 10]
*/

const pureMultiply = (array, value) => {
  const newArray = [];

  array.forEach(element => {
    newArray.push(element * value);
  });

  return newArray;
};

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = pureMultiply(numbers, 2);

// Не відбулося мутації вихідних даних
console.log(numbers); // [1, 2, 3, 4, 5]
// Функція повернула новий масив із зміненими даними
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
