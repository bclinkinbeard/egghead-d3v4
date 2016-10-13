var margin = { top: 10, right: 20, bottom: 30, left: 30 };
var width = 400 - margin.left - margin.right;
var height = 565 - margin.top - margin.bottom;

var data;
var xScale;

var svg = d3.select('.chart')
  .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    // .call(responsivefy)
  .append('g')
    .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

var yScale = d3.scaleLinear()
  .domain([0, 100])
  .range([height, 0]);
svg
  .append('g')
  .call(d3.axisLeft(yScale));

d3.json('./data.json', function (err, result) {
  data = result;

  xScale = d3.scaleBand()
    .domain(data.map(d => d.name).sort())
    .range([0, width])
    .padding(0.2);
  svg
    .append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(xScale));

  render();
});

function render (subject = 'math') {
  var t = d3.transition().duration(1000);

  var update = svg
    .selectAll('rect')
    .data(data.filter(d => d[subject]), function (d) {
      return d.name;
    });

  update
    .exit()
    .transition(t)
    .attr('y', height)
    .attr('height', '0')
    .remove();

  update
    .transition(t)
    .delay(750)
    .attr('y', d => yScale(d[subject]))
    .attr('height', d => height - yScale(d[subject]));

  var enter = update.enter()
    .append('rect')
    .attr('x', d => xScale(d.name))
    .attr('y', height)
    .attr('width', xScale.bandwidth())
    .attr('height', 0)
    .style('fill', 'steelblue')
    .transition(t)
    .delay(update.exit().size() ? 1500 : 0)
    .attr('y', d => yScale(d[subject]))
    .attr('height', d => height - yScale(d[subject]));
}

function responsivefy(svg) {
  // get container + svg aspect ratio
  var container = d3.select(svg.node().parentNode),
      width = parseInt(svg.style("width")),
      height = parseInt(svg.style("height")),
      aspect = width / height;

  // add viewBox and preserveAspectRatio properties,
  // and call resize so that svg resizes on inital page load
  svg.attr("viewBox", "0 0 " + width + " " + height)
      .attr("preserveAspectRatio", "xMinYMid")
      .call(resize);

  // to register multiple listeners for same event type,
  // you need to add namespace, i.e., 'click.foo'
  // necessary if you call invoke this function for multiple svgs
  // api docs: https://github.com/mbostock/d3/wiki/Selections#on
  d3.select(window).on("resize." + container.attr("id"), resize);

  // get width of container and resize svg to fit it
  function resize() {
      var targetWidth = parseInt(container.style("width"));
      svg.attr("width", targetWidth);
      svg.attr("height", Math.round(targetWidth / aspect));
  }
}
