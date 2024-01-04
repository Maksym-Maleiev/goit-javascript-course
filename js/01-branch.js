// If
/*
let cost = 0;
const subscription = "pro";

if (subscription === "pro") {
  cost = 100;
}

console.log(cost); // 100
*/

/*
let cost = 0;
const subscription = "free";

if (subscription === "pro") {
  cost = 100;
}

console.log(cost); // 0
*/

// If...else

/*
let cost;
const subscription = "free";

if (subscription === "pro") {
  cost = 100;
} else {
  cost = 0;
}

console.log(cost); // 0
*/

/*
let cost;
const subscription = "pro";

if (subscription === "pro") {
  cost = 100;
} else {
  cost = 0;
}

console.log(cost); // 100
*/

// else...if

let cost;
const subscription = "premium";

if (subscription === "free") {
  cost = 0;
} else if (subscription === "pro") {
  cost = 100;
} else if (subscription === "premium") {
  cost = 500;
} else {
  console.log("Invalid subscription type");
}

console.log(cost); // 500