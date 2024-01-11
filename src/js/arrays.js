// МАСИВИ

/*
const clients = ["Mango", "Poly", "Ajax"];

// Вказуючи в дужках індекс елемента, ми отримуємо його значення.
console.log(clients[0]); // Mango
console.log(clients[1]); // Poly
console.log(clients[2]); // Ajax
*/

// Перевизначення
/*
const clients = ["Mango", "Poly", "Ajax"];
clients[0] = "Kiwi";
clients[1] = "Pango";
console.log(clients); // ["Kiwi", "Pango", "Ajax"]
*/

// Довжина масиву
/*
const clients = ["Mango", "Poly", "Ajax"];
console.log(clients.length); // 3
*/

// Індекс останнього елемента

const clients = ["Mango", "Poly", "Ajax"];
const lastElementIndex = clients.length - 1;
console.log(lastElementIndex); // 2
console.log(clients[lastElementIndex]); // "Ajax"