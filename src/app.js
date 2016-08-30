var margin = { top: 0, right: 0, bottom: 30, left: 20 };
var width = 425 - margin.left - margin.right;
var height = 625 - margin.top - margin.bottom;

var svg = d3.select('.chart')
  .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
  .append('g')
    .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

svg.append('rect')
  .attr('width', width)
  .attr('height', height)
  .style('fill', 'lightblue')
  .style('stroke', 'green');
