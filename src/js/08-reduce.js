/*
 * METHOD 'REDUCE()'
 */

const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

console.log(total); // 32

/*
 * array of objects
 */

const students = [
  { name: 'Манго', score: 83 },
  { name: 'Полі', score: 59 },
  { name: 'Аякс', score: 37 },
  { name: 'Ківі', score: 94 },
  { name: "Х'юстон", score: 64 },
];

// Назва акумулятора може бути довільною, це просто параметр функції
const totalScore = students.reduce((total, student) => {
  return total + student.score;
}, 0);
console.log(totalScore);

const averageScore = totalScore / students.length;
console.log(averageScore);

/*
 * advanced 'reduce'
 */

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

// Пройдемо по всіх елементах колекції та додамо значення властивості likes
// До акумулятора, початкове значення якого вкажемо 0.
const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

console.log(likes); // 32

// Напевно, підрахунок лайків не одиночна операція, тому напишемо функцію
// для підрахунку лайків із колекції
const countLikes = tweets => {
  return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
};

console.log(countLikes(tweets)); // 32

// Пройдемо по всіх елементах колекції та додамо значення властивості tags
// До акумулятора, початкове значення якого вкажемо порожнім масивом [].
// На кожній ітерації пушимо в акумулятор всі елементи tweet.tags і повертаємо його.
const tags = tweets.reduce((allTags, tweet) => {
  allTags.push(...tweet.tags);

  return allTags;
}, []);

console.log(tags);

// Напевно збір тегів не поодинока операція, тому напишемо функцію
// для збирання тегів з колекції
const getTags = tweets =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);

console.log(getTags(tweets));

// Винесемо callback-функцію окремо, а в reduce передамо посилання на неї.
// Це стандартна практика, якщо callback-функція досить велика.

// Якщо в об'єкті-акумуляторі acc немає своєї властивості з ключем tag,
// щось створюємо і записує йому значення 0.
// Інакше збільшуємо значення на 1.
const getTagStats = (acc, tag) => {
  if (!acc.hasOwnProperty(tag)) {
    acc[tag] = 0;
  }

  acc[tag] += 1;

  return acc;
};

// Початкове значення акумулятора - це порожній об'єкт {}
const countTags = tags => tags.reduce(getTagStats, {});

const tagCount = countTags(tags);
console.log(tagCount);
