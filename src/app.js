var scores = [
  { name: 'Alice', score: 96 },
  { name: 'Billy', score: 83 },
  { name: 'Cindy', score: 91 },
  { name: 'David', score: 96 },
  { name: 'Emily', score: 88 }
];

var update = d3.select('.chart')
  .selectAll('div')
  .data(scores, function (d) {
    return d ? d.name : this.innerText;
  })
  .style('color', 'blue');

var enter = update.enter()
  .append('div')
  .text(function (d) {
    return d.name;
  })
  .style('color', 'green');

update.exit().remove();

update.merge(enter)
  .style('width', d => d.score + 'px')
  .style('height', '50px')
  .style('background', 'lightgreen')
  .style('border', '1px solid black')
