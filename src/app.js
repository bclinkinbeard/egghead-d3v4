var div = d3.select('div');
console.log(div.nodes());

var divLinks = div.selectAll('a');
console.log(divLinks.nodes());

var secondLink = d3.selectAll('a:nth-child(2)');
console.log(secondLink.nodes());

var allLinks = d3.selectAll(document.links);
console.log(allLinks.size());
