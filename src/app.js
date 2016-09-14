var margin = { top: 10, right: 20, bottom: 25, left: 25 };
var width = 425 - margin.left - margin.right;
var height = 625 - margin.top - margin.bottom;

var svg = d3.select('.chart')
  .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
  .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

svg.append('rect')
  .attr('width', width / 2)
  .attr('height', height)
  .style('fill', 'lightblue')
  .style('stroke', 'green');

svg.append('rect')
  .attr('x', width / 2)
  .attr('width', width / 2)
  .attr('height', height)
  .style('fill', 'lightblue')
  .style('stroke', 'green');
