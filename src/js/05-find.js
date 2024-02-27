// * METHOD FIND()

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const blue = colorPickerOptions.find(option => option.label === 'blue');
console.log(blue); // { label: 'blue', color: '#2196F3' }

const pink = colorPickerOptions.find(option => option.label === 'pink');
console.log(pink); // { label: 'pink', color: '#E91E63' }

const white = colorPickerOptions.find(option => option.label === 'white');
console.log(white); // undefined
