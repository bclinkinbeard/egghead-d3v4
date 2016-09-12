// make console.log write to the page for better in-browser experience
(function () {
  var body = document.querySelector('body');
  body.style['fontFamily'] = 'monospace';
  body.style['fontSize'] = '2em';
  console.log = function (x) { body.innerText += x + '\n'; };
}());


var quantizeScale = d3.scaleQuantize()
  .domain([0, 100])
  .range(["red", "white", "green"]);

console.log(quantizeScale(22));
console.log(quantizeScale(50));
console.log(quantizeScale(88));

console.log(quantizeScale.invertExtent('white'));
