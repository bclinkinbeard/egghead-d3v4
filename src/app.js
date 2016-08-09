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
