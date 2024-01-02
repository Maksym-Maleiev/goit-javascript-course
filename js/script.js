var b = 10;

a = b * 2;
console.log(a);

console.log("JavaScript is awesome".length);
console.log("JavaScript is awesome".toUpperCase());

// Const and let
const yearOfBirth = 1993;
console.log(yearOfBirth);

let age;
console.log(age);

age = 14;
console.log(age);

// constants and CONSTANTS (UPPER_SNAKE_CASE)
const COLOR_TEAL = "#009688";
console.log(COLOR_TEAL);

const LOGIN_SUCCESS_MESSAGE = "You are welcome!";
console.log(LOGIN_SUCCESS_MESSAGE);

let username;
console.log(username);

let myAge = 30;
myAge = 25;
console.log(myAge);

// Numbers
const numberChild = 1;
console.log(numberChild);

const points = 15.8;
console.log(points);

// String
const userName = "Max";
console.log(userName);

const description = "JavaSript for beginners";
console.log(description);

// Boolean
const isLoggedIn = true;
console.log(isLoggedIn);

const canMerge = false;
console.log(canMerge);

const hasChildren = true;
console.log(hasChildren);

const isModalOpen = false;
console.log(isModalOpen);

// Null
let selectedProduct = null;
console.log(selectedProduct);

// Underfined
let firstName;
console.log(firstName);

// typeOf
let secondName;
console.log(typeof secondName); // "undefined"

let inputValue = null;
console.log(typeof inputValue); // "object"

const quantity = 17;
console.log(typeof quantity); // "number"

const message = "JavaScript is awesome!";
console.log(typeof message); // "string"

const isSidebarOpen = false;
console.log(typeof isSidebarOpen); // "boolean"

// console.log() and alert()
const myMessage = 'JavaScript is awesome';
console.log(message);

const myName = "Max";
console.log("Username is ", myName);

const alertMessage = "JavaScript is awesome!";
// alert(alertMessage);

// confirm() and prompt()
/*
const isComing = confirm("Please confirm hotel reservation");
console.log(isComing);
*/

/*
const hotelName = prompt("Please enter desired hotel name");
console.log(hotelName);
*/

/*
const value = prompt("Please enter a number!");
console.log(typeof value);
console.log(value);
*/

// Math operator
const x = 10;
const y = 5;

console.log(x + y);

console.log(x - y);

console.log(x * y);

console.log(x / y);

console.log(x % y);

let value = 5;

value += 10;
console.log(value);

const h = 5;
const i = 10;
const j = 5;

console.log("h > i:", h > i); 
console.log("h < i:", h < i);
console.log("h < j:", h < j); 
console.log("h <= j:", h <= j);
console.log("h === i:", h === i); 
console.log("h === j:", h === j);
console.log("h !== i:", h !== i);
console.log("h !== j:", h !== j);

// ❌ Bad
console.log(5 == "5");
console.log(5 != "5"); 
console.log(1 == true);
console.log(1 != true); 

// ✅ Good
console.log(5 === "5");
console.log(5 === 5);
console.log(5 !== "5");
console.log(5 !== 5); 
console.log(1 === true); 
console.log(1 !== true);

// Number(val)
const valueA = "5";
console.log(Number(valueA)); // 5
console.log(typeof Number(valueA)); // "number"

const valueB = "random string";
console.log(Number(valueB)); // NaN
console.log(typeof Number(valueB)); // "number"

// Number.parseInt(val)
console.log(Number.parseInt("5px")); // 5
console.log(Number.parseInt("12qwe74")); // 12
console.log(Number.parseInt("12.46qwe79")); // 12
console.log(Number.parseInt("qweqwe")); // NaN

// Number.parseFloat(val)
console.log(Number.parseFloat("5px")); // 5
console.log(Number.parseFloat("12qwe74")); // 12
console.log(Number.parseFloat("12.46qwe79")); // 12.46
console.log(Number.parseFloat("qweqwe")); // NaN

// Number.isNaN(val)
const validNumber = Number("51"); // 51
console.log(Number.isNaN(validNumber)); // false

const invalidNumber = Number("qweqwe"); // NaN
console.log(Number.isNaN(invalidNumber)); // true