// while

/*
let counter = 0;

while (counter < 10) {
  console.log("counter: ", counter);
  counter += 1;
}
*/

// ------------------

/*
let clientCounter = 18;
const maxClients = 25;

while (clientCounter < maxClients) {
  console.log(clientCounter);
  clientCounter += 1;
}
*/

// do...while

/*
let password = "";

do {
  password = prompt("Введите пароль длиннее 4-х символов", "");
} while (password.length < 5);

console.log("Ввели пароль: ", password);
*/

// for

/*
for (let i = 0; i <= 20; i += 5) {
  console.log(i);
}
*/

/*
const target = 3;
let sum = 0;

for (let i = 0; i <= target; i += 1) {
  sum += i;
  console.log(sum);
}
*/

/*
const max = 10;
for (let i = 0; i < max; i += 1) {
  console.log(`${max} % ${i} = `, max % i);
}
*/

// break

/*
for (let i = 0; i <= 5; i += 1) {
  console.log(i);

  if (i === 3) {
    console.log("Знайшли число 3, перериваємо виконання циклу");
    break;
  }
}

console.log("Лог після циклу");
*/

// continue

const number = 10;

for (let i = 0; i < number; i += 1) {
  if (i % 2 === 0) {
    continue;
  }

  console.log("Нечетное i: ", i); // 1, 3, 5, 7, 9
}