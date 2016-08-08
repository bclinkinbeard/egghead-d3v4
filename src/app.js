var linearScale = d3.scaleLinear()
  .domain([0, 100])
  .range([0, 600])
  .clamp(true);

console.log(linearScale(50));

// time

var timeScale = d3.scaleTime()
  .domain([new Date(2016, 0, 1), new Date()])
  .range([0, 500]);

console.log(timeScale(new Date(2016, 3, 16)));
console.log(timeScale.invert(250).toString());

// quantize

var quantizeScale = d3.scaleQuantize()
  .domain([0, 100])
  .range(['red', 'white', 'green']);

console.log(quantizeScale(80));
console.log(quantizeScale.invertExtent('white'));

// ordinal

var ordinalScale = d3.scaleOrdinal()
  .domain(['good', 'better', 'best'])
  .range([10, 20, 50]);

console.log(ordinalScale('good'));
console.log(ordinalScale('better'));
console.log(ordinalScale('best'));
