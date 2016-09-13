// make console.log write to the page for better in-browser experience
(function () {
  var body = document.querySelector('body');
  body.style['fontFamily'] = 'monospace';
  body.style['fontSize'] = '2em';
  console.log = function (x) { body.innerText += x + '\n'; };
}());


var linearScale = d3.scaleLinear()
  .domain([0, 100])
  .range([0, 600])
  .clamp(true);

console.log(linearScale(-20));
console.log(linearScale(50));
console.log(linearScale(105));

console.log(linearScale.invert(300));
