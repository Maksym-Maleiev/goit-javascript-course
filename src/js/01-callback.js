// * CALLBACK OF FUNCTION

/*
function greet(name) {
  return `Ласкаво просимо ${name}.`;
}

// Викликаємо функцію greet і виводимо результат у консоль
console.log(greet('Манго'));
// Ласкаво просимо до Манго.

// Виводимо функцію greet в консоль не викликаючи її
console.log(greet);
// greet() { 
  // return `Ласкаво просимо ${name}.`;
// }
*/

/*
// ** Колбек-функція
function greet(name) {
  console.log(`Ласкаво просимо ${name}.`);
}

// ** Функція вищого ладу
function registerGuest(name, callback) {
  console.log(`Реєструємо гостя ${name}.`);
  callback(name);
}

registerGuest('Манго', greet);
*/

// * INLINE CALLBACKS

/*
function registerGuest(name, callback) {
  console.log(`Реєструємо гостя ${name}.`);
  callback(name);
}

// Передаємо інлайн функцію greet як колбек
registerGuest('Манго', function greet(name) {
  console.log(`Ласкаво просимо ${name}.`);
});

// Передаємо інлайн функцію notify як колбек
registerGuest('Полі', function notify(name) {
  console.log(`Шановний ${name}, ваш номер буде готовий через 30 хвилин.`);
});
*/

// * A FEW CALLBACKS

/*
function processCall(recipient) {
  // Імітуємо доступність абонента випадковим числом
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
    // Логіка активації автовідповідача
  } else {
    console.log(`З'єднуємо з ${recipient}, чекайте...`);
    // Логіка прийняття дзвінка
  }
}

processCall('Манго');
*/

/*
function processCall(recipient, onAvailable, onNotAvailable) {
  // Імітуємо доступність абонента випадковим числом
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }

  onAvailable(recipient);
}

function takeCall(name) {
  console.log(`З'єднуємо з ${name}, чекайте...`);
  // Логіка прийняття дзвінка
}

function activateAnsweringMachine(name) {
  console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
  // Логіка активації автовідповідача
}

function leaveHoloMessage(name) {
  console.log(`Абонент ${name} недоступний, записуємо голограму.`);
  // Логіка запису голограми
}

processCall('Манго', takeCall, activateAnsweringMachine);
processCall('Полі', takeCall, leaveHoloMessage);
*/

// * ABSTRACTING REPETITION

/*
for (let i = 0; i < 10; i += 1) {
  console.log(i);
}
*/

/*
function repeatLog(n) {
  for (let i = 0; i < n; i += 1) {
    console.log(i);
  }
}

repeatLog(5);
*/

function printValue(value) {
  console.log(value);
}

function prettyPrint(value) {
  console.log('Logging value:', value);
}

function repeat(n, action) {
  for (let i = 0; i < n; i += 1) {
    action(i);
  }
}

// Передаємо printValue як callback-функцію
repeat(3, printValue);
// 0
// 1
// 2

// Передаємо prettyPrint як callback-функцію
repeat(3, prettyPrint);
// Logging value: 0
// Logging value: 1
// Logging value: 2
