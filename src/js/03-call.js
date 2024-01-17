/*
function fnA() {
  console.log("Лог всередині функції fnA до виклику fnB");
  fnB();
  console.log("Лог всередині функції fnA після виклику fnB");
}

function fnB() {
  console.log("Лог усередині функції fnB");
}

console.log("Лог перед викликом fnA");
fnA();
console.log("Лог після виклику fnA");

// "Лог перед викликом fnA"
// "Лог всередині функції fnA до виклику fnB"
// "Лог усередині функції fnB"
// "Лог всередині функції fnA після виклику fnB"
// "Лог після виклику fnA"
*/

function bar() {
  console.log("bar");
}

function baz() {
  console.log("baz");
}

function foo() {
  console.log("foo");
  bar();
  baz();
}

foo();