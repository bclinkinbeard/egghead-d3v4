// make console.log write to the page for better in-browser experience
(function () {
  var body = document.querySelector('body');
  body.style['fontFamily'] = 'monospace';
  body.style['fontSize'] = '2em';
  console.log = function (x) { body.innerText += x + '\n'; };
}());


d3.json('data/data.json', function (data) {
  var extent = d3.extent(data, function (d) {
    return d.age;
  });
  console.log(extent);

  var scale = d3.scaleLinear()
    .domain(extent)
    .range([0, 600]);
  console.log(scale(37));

  var ages = d3.set(data, function (d) {
    return d.age;
  });
  console.log(ages.values());
})
