/*
 * Method 'sort()'
 */

const scores = [61, 19, 74, 35, 92, 56];
scores.sort();

console.log(scores);
// [19, 35, 56, 61, 74, 92]

const numbers = [27, 2, 41, 4, 7, 3, 75];
numbers.sort();

console.log(numbers);
// [2, 27, 3, 4, 41, 7, 75]

const students = ['Віка', 'Андрій', 'Олег', 'Юля', 'Борис', 'Катя'];
students.sort();

console.log(students);
// [ 'Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля' ]

const letters = ['b', 'B', 'a', 'A', 'c', 'C'];
letters.sort();

console.log(letters);
// ['A', 'B', 'C', 'a', 'b', 'c']

const points = [61, 19, 74, 35, 92, 56];
const ascendingPoints = [...points].sort();

console.log(points);
// [61, 19, 74, 35, 92, 56]
console.log(ascendingPoints);
// [19, 35, 56, 61, 74, 92]

/*
 * Custom number sorting order
 */

const sco = [61, 19, 74, 35, 92, 56];
const ascendingSco = [...sco].sort((a, b) => a - b);

console.log(ascendingSco);
// [19, 35, 56, 61, 74, 92]

const scor = [61, 19, 74, 35, 92, 56];
const descendingScor = [...scor].sort((a, b) => b - a);
console.log(descendingScor); // [92, 74, 61, 56, 35, 19]
