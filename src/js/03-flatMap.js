// * METHOD FLATMAP()

const students = [
  { name: 'Манго', courses: ['математика', 'фізика'] },
  { name: 'Полі', courses: ['інформатика', 'математика'] },
  { name: 'Ківі', courses: ['фізика', 'біологія'] },
];

const map = students.map(student => student.courses);
console.log(map); // [['математика', 'фізика'], ['інформатика', 'математика'], ['фізика', 'біологія']]

const flatMap = students.flatMap(student => student.courses);
console.log(flatMap); // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];
