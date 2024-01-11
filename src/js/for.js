// ІТЕРАЦІЯ З МАСИВУ
/*
const clients = ['Mango', 'Ajax', 'Poly'];

for (let i = 0; i < clients.length; i += 1){
  console.log(clients[i]);
}
*/

// Цикл for...of
/*
const clients = ["Mango", "Ajax", "Poly"];

for (const client of clients) {
  console.log(client);
}

const string = "javascript";

for (const character of string) {
  console.log(character);
}
*/

// Оператори break і continue
/*
const clients = ["Mango", "Poly", "Ajax"];
const clientNameToFind = "Poly";
let message;

for (const client of clients) {
  
// На кожній ітерації перевірятимемо збігається елемент масиву з
  // ім'ям клієнта. Якщо збігається ми записуємо в message повідомлення
  // Про успіх і робимо break щоб не шукати далі
  if (client === clientNameToFind) {
    message = 
"Клієнт з таким ім'ям є у базі даних!";
    break;
  }

// Якщо вони не збігаються, то запишемо в message повідомлення про відсутність імені
  message = "Клієнта з таким ім'ям немає в базі даних!";
}

console.log(message); // "Клієнт з таким ім'ям є в базі даних!"
*/

/*
const clients = ["Mango", "Poly", "Ajax"];
const clientNameToFind = "Poly";
let message = "Клієнта з таким ім'ям немає в базі даних!";

for (const client of clients) {
  if (client === clientNameToFind) {
    message = "Клієнт з таким ім'ям є у базі даних!";
    break;
  }
  // Якщо не збігається, то на цій ітерації нічого не робимо
}

console.log(message); // Клієнт з таким ім'ям є у базі даних!
*/

const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;

// Для чисел менше ніж поріг спрацьовує continue, виконання тіла припиняється
// та управління передається на наступну ітерацію.
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < threshold) {
    continue;
  }

  console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
}