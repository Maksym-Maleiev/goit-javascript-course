/*
const globalValue = 10;

console.log(globalValue); // 10

function foo() {
  console.log(globalValue); // 10
}

for (let i = 0; i < 5; i++) {
  console.log(globalValue); // 10

  if (i === 2) {
    console.log(globalValue); // 10
  }
}
*/

/*
function foo() {
  const a = 20;
  console.log(a); // 20

  for (let i = 0; i < 5; i++) {
    console.log(a); // 20

    if (i === 2) {
      console.log(a); // 20
    }
  }
}

// ❌ Помилка! Змінна a не доступна у глобальній області видимості
console.log(a);

for (let i = 0; i < 3; i++) {
  // ❌ Помилка! Змінна a не доступна в цій області видимості
  console.log(a);
}
*/


for (let i = 0; i < 5; i++) {
  const a = 20;
  console.log(a); // 20

  if (i === 2) {
    const b = 30;
    console.log(a); // 20
    console.log(b); // 30
  }

  if (i === 3) {
    console.log(a); // 20

    // ❌ Помилка! Змінна b не доступна в цій області видимості
    console.log(b);
  }
}


