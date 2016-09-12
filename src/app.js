// make console.log write to the page for better in-browser experience
(function () {
  var body = document.querySelector('body');
  body.style['fontFamily'] = 'monospace';
  body.style['fontSize'] = '2em';
  console.log = function (x) { body.innerText += x + '\n'; };
}());


var timeScale = d3.scaleTime()
  .domain([new Date(2016, 0, 1), new Date()])
  .range([0, 100]);

console.log(timeScale(new Date(2016, 0, 15)));
console.log(timeScale(new Date(2016, 3, 15)));
console.log(timeScale(new Date()));

console.log(timeScale.invert(50));
