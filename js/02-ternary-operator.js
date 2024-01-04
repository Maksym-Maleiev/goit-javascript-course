/*
let type;
const age = 20;

if (age >= 18) {
  type = "adult";
} else {
  type = "child";
}

console.log(type); // "adult"
*/

const age = 18;
const type = age >= 18 ? "adult" : "child";

console.log(type); //"adult"

// ----------------

/*
const num1 = 5;
const num2 = 10;
let biggerNumber;

if (num1 > num2) {
  biggerNumber = num1;
} else {
  biggerNumber = num2;
}

console.log(biggerNumber); // 10
*/

const num1 = 5;
const num2 = 10;

const biggerNumber = num1 > num2 ? num1 : num2;

console.log(biggerNumber); //10