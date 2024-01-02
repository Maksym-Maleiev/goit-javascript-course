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

// Floating point addition
console.log(0.1 + 0.2 === 0.3); // false
console.log(0.1 + 0.2); // 0.30000000000000004

console.log(0.17 + 0.24); // 0.41000000000000003
console.log((0.17 * 100 + 0.24 * 100) / 100); // 0.41

console.log(0.17 + 0.24); // 0.41000000000000003
console.log((0.17 + 0.24).toFixed(2)); // 0.41

// Math

// Math.floor(num)
console.log(Math.floor(1.7)); // 1

// Math.ceil(num)
console.log(Math.ceil(1.2)); // 2

// Math.round(num)
console.log(Math.round(1.2)); // 1
console.log(Math.round(1.5)); // 2

// Math.max(num1, num2, ...)
console.log(Math.max(20, 10, 50, 40)); // 50

// Math.min(num1, num2, ...)
console.log(Math.min(20, 10, 50, 40)); // 10

// Math.pow(base, exponent)
console.log(Math.pow(2, 4)); // 16

// Math.random()
console.log(Math.random()); // random numbers between 0 and 1
console.log(Math.random() * (10 - 1) + 1); // random numbers between 1 and 10

// STRING

const newMessage = "Max " + "is" + " happy";
console.log(newMessage); // Max is happy

console.log(1 + "2"); // "12"
console.log(1 + "2" + 4); // "124"
console.log(1 + 2 + "4"); // "34"

/*
const guestName = "Max";
const roomNumber = 207;
const greeting = "Welcome " + guestName + ", your room number is " + roomNumber + "!"; 
console.log(greeting);
*/
// "Welcome Mango, your room number is 207!"

const guestName = "Max";
const roomNumber = 207;
const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`; 
console.log(greeting); // "Welcome Mango, your room number is 207!"

// Length
const firstMessage = "Welcome to Bahamas!";
console.log(firstMessage.length); // 19
console.log("There is nothing impossible to him who will try".length); // 47

// toLowerCase() and toUpperCase()

const secondMessage = "Welcome to Bahamas!";
console.log(secondMessage.toLowerCase()); // "welcome to bahamas!"
console.log(secondMessage.toUpperCase()); // "WELCOME TO BAHAMAS!"
console.log(secondMessage); // "Welcome to Bahamas!"

console.log("saMsUng" === "samsung"); // false
console.log("saMsUng" === "SAMSUNG"); // false

const BRAND_NAME = "SAMSUNG";
const userInput = "saMsUng";
const normalizedToUpperCaseInput = userInput.toUpperCase();

console.log(userInput); // 'saMsUng'
console.log(userInput === BRAND_NAME); // false
console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
console.log(normalizedToUpperCaseInput === BRAND_NAME); // true

// indexOf()
const thirdMessage = "Welcome to Bahamas!";
console.log(thirdMessage.indexOf("to")); // 8
console.log(thirdMessage.indexOf("hello")); // -1

// includes()

const productName = "Repair droid";

console.log(productName.includes("p")); // true
console.log(productName.includes("P")); // false
console.log(productName.includes("droid")); // true
console.log(productName.includes("Droid")); // false
console.log(productName.includes("Repair")); // true
console.log(productName.includes("repair")); // false

// endsWith()

const jsFileName = "script.js";
console.log(jsFileName.endsWith(".js")); // true

const cssFileName = "styles.css";
console.log(cssFileName.endsWith(".js")); // false

// replace() and replaceAll()

const jsNewFileName = "script.js";
const minifiedJsFileName = jsNewFileName.replace(".js", ".min.js");
console.log(minifiedJsFileName); // "script.min.js"

const cssNewFileNames = "styles.css, about.css, portfolio.css";
const minifiedCssFileNames = cssNewFileNames.replaceAll(".css", ".min.css");
console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"

// slice()

const newProductName = "Repair droid";
console.log(newProductName.slice(0, 4)); // "Repa"
console.log(newProductName.slice(3, 9)); // "air dr"
console.log(newProductName.slice(0, newProductName.length)); // "Repair droid"
console.log(newProductName.slice(7, newProductName.length)); // "droid"

// LOGICAL OPERATORS
