function go () {
  var t = d3.transition()
    .delay(1000)
    .duration(1000);

  d3.selectAll('.block')
    .transition(t)
    .style('width', '400px');

  d3.select('.a')
    .transition(t)
    .style('background-color', 'orange');

  d3.select('.b')
    .transition(t)
    .style('background-color', 'blue');
}

function configure (t, delay, duration) {
  return t.delay(delay).duration(duration);
}

function goNow () {
  d3.selectAll('.block')
    .transition()
    .call(configure, 1000, 1000)
    .style('height', '200px');
}
