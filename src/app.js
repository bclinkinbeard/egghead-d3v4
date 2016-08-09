var ordinalScale = d3.scaleOrdinal()
  .domain(['poor', 'good', 'great'])
  .range(['red', 'white', 'green']);

console.log(ordinalScale('good'));
console.log(ordinalScale('great'));
console.log(ordinalScale('poor'));
