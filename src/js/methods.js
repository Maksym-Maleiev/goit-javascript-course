// МЕТОДИ МАСИВУ

// Методи split() та join()
/*
const name = "Mango";
console.log(name.split("")); // ["M", "a", "n", "g", "o"]

const message = "JavaScript це цікаво";
console.log(message.split(" ")); // ["JavaScript", "це", "цікаво"]
*/

/*
const words = ["JavaScript", "це", "цікаво"];
console.log(words.join("")); // "JavaScriptцецікаво"
console.log(words.join(" ")); // "JavaScript це цікаво"
console.log(words.join("-")); // "JavaScript-це-цікаво"
*/

// Метод indexOf()
/*
const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.indexOf("Poly")); // 2
console.log(clients.indexOf("Monkong")); // -1
*/

// Метод includes()
/*
const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.includes("Poly")); // true
console.log(clients.includes("Monkong")); // false
*/

// Перевірка множинних умов з includes()
/*
// Виносимо варіанти до масиву
const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
const fruit = "cherry";
// Перевіряємо наявність елемента
const hasFruit = redFruits.includes(fruit);

if (hasFruit) {
  console.log(`${fruit} is a red fruit!`);
}
*/

// Методи push() і pop()
/*
const numbers = [];

numbers.push(1);
console.log(numbers); // [1]

numbers.push(2);
console.log(numbers); // [1, 2]

numbers.push(3);
console.log(numbers); // [1, 2, 3]

numbers.push(4);
console.log(numbers); // [1, 2, 3, 4]

numbers.push(5);
console.log(numbers); // [1, 2, 3, 4, 5]
*/

/*
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.pop()); //  5
console.log(numbers); // [1, 2, 3, 4]

console.log(numbers.pop()); //  4
console.log(numbers); // [1, 2, 3]

console.log(numbers.pop()); //  3
console.log(numbers); // [1, 2]

console.log(numbers.pop()); //  2
console.log(numbers); // [1]

console.log(numbers.pop()); //  1
console.log(numbers); // []
*/

// Метод slice()
/*
const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]
*/

/*
const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.slice()); // ["Mango", Ajax", "Poly", "Kiwi"]
*/

/*
const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]
console.log(clients.slice(2)); // ["Poly", "Kiwi"]
*/

/*
const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.slice(-2)); // ["Poly", "Kiwi"]
*/

// Метод splice()

// Вилучення
/*
const scores = [1, 2, 3, 4, 5];

// Видаляємо три елементи масиву, починаючи з першого елемента (індекс 0)
const deletedScores = scores.splice(0, 3);

// Тепер масив scores містить два елементи
console.log(scores); // [4, 5]

// А масив deletedScores містить три віддалені елементи
console.log(deletedScores); // [1, 2, 3]
*/

// Додавання
/*
const colors = ["red", "green", "blue"];

colors.splice(2, 0, "purple");
console.log(colors); // ["red", "green", "purple", "blue"]
*/

/*
const colors = ["red", "green", "blue"];

colors.splice(1, 0, "yellow", "pink");
console.log(colors); // ["red", "yellow", "pink", "green", "blue"]
*/

// Заміна
/*
const languages = ["C", "C++", "Java", "JavaScript"];

// Замінюємо елемент з індексом 1 на новий
languages.splice(1, 1, "Python");
console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// Замінюємо один елемент (з індексом 2) на кілька
languages.splice(2, 1, "C#", "Swift", "Go");
console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]
*/

// Метод concat()

const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Monkong", "Singu"];

const allClientsWithOldFirst = oldClients.concat(newClients);
console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

const allClientsWithNewFirst = newClients.concat(oldClients);
console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
console.log(newClients); // ["Monkong", "Singu"]