/*
function multiply() {
  console.log('Це лог при виклику функції multiply');
}

console.log(multiply());
*/

/*
function multiply(x, y, z) {
  console.log(`Результат множення дорівнює ${x * y * z}`);
}

multiply(2, 3, 5); // Результат множення дорівнює 30
multiply(4, 8, 12); // Результат множення дорівнює 384
multiply(17, 6, 25); // Результат множення дорівнює 2550
*/

/*
function multiply(x, y, z) {
  console.log("Код до return виконується як завжди");

  // Повертаємо результат вираження множення
  return x * y * z;

  console.log("Цей лог ніколи не виконається, він стоїть після return");
}

//Результат роботи функції можна зберегти в змінну
let result = multiply(2, 3, 5);
console.log(result); // 30

result = multiply(4, 8, 12);
console.log(result); // 384

result = multiply(17, 6, 25);
console.log(result); // 2550
*/

/*
function multiply(x, y, z) {
  console.log(`Результат множення дорівнює ${x * y * z}`);
}

console.log("Лог до виклику multiply");
multiply(2, 3, 5); // Результат умножения равен 30
console.log("Лог після виклику функції multiply");

// Послідовність логів у консолі
// "Лог до виклику функції multiply"
// "Результат множення дорівнює 30"
// "Лог після виклику функції multiply"
*/

/*
function count(countFrom = 0, countTo = 10, step = 1) {
  console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

  for (let i = countFrom; i <= countTo; i += step) {
    console.log(i);
  }
}

count(1, 5); // countFrom = 1, countTo = 5, step = 1
count(2); // countFrom = 2, countTo = 10, step = 1
count(); // countFrom = 0, countTo = 10, step = 1
*/

/*
function multiply() {
  let total = 1;

  for (const argument of arguments) {
    total *= argument;
  }

  return total;
}

console.log(multiply(1, 2, 3)); //  6
console.log(multiply(1, 2, 3, 4)); //  24
console.log(multiply(1, 2, 3, 4, 5)); //  120
*/

/*
function withdraw(amount, balance) {
  if (amount === 0) {
    console.log("Для проведення операції введіть суму більше нуля");
  } else if (amount > balance) {
    console.log("Недостатньо коштів на рахунку");
  } else {
    console.log("Операцію зняття коштів проведено успішно");
  }
}

withdraw(0, 300); // "Для проведення операції введіть суму більше за нуль"
withdraw(500, 300); // "Недостатньо коштів на рахунку"
withdraw(100, 300); // "Операцію зняття коштів проведено успішно"
*/


function withdraw(amount, balance) {
  // Якщо умова виконується, викликається console.log
  // та вихід з функції. Код, що йде після тіла if не виконається.
  if (amount === 0) {
    console.log("Для проведення операції введіть суму більше нуля");
    return;
  }

  // Якщо умова першого if не виконалося, його тіло пропускається
  // та інтерпретатор доходить до другого if.
  // Якщо умова виконується, викликається console.log та вихід із функції.
  // Код, що йде після тіла if не виконається.
  if (amount > balance) {
    console.log("Недостатньо коштів на рахунку");
    return;
  }

  // Якщо жоден із попередніх if не виконався,
  // Інтерпретатор доходить до цього коду і виконує його.
  console.log("Операцію зняття коштів проведено");
}

withdraw(0, 300); // "Для проведення операції введіть суму більше за нуль"
withdraw(500, 300); // "Недостатньо коштів на рахунку"
withdraw(100, 300); // "Операцію зняття коштів проведено"

