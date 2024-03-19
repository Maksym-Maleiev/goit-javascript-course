console.log('Прототипне успадкування');

/*
 * Прототип об'єкту
 */

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = 'Манго';

// console.log(dog);
// // { name: 'Манго', __proto__: animal }
// console.log(animal.isPrototypeOf(dog));
// // true

// console.log(dog.hasOwnProperty('name'));
// // true
// console.log(dog.name);
// // 'Манго'

// console.log(dog.hasOwnProperty('legs'));
// // false
// console.log(dog.legs);
// // 4

/*
 * Метод hasOwnProperty()
 */

// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;

// for (const key in dog) {
//   console.log(key);
//   // barks, eats
// }

// ! not use

// const animal = {
//   eats: true,
// };
// const dog = Object.create(animal);
// dog.barks = true;

// for (const key in dog) {
//   if (!dog.hasOwnProperty(key)) continue;

//   console.log(key);
//   // barks
// }

// TODO

const animal = {
  eats: true,
};
const dog = Object.create(animal);
dog.barks = true;

const dogKeys = Object.keys(dog);

console.log(dogKeys);
// ['barks']
