// you will see two red links when viewing this on Plunker
// we did not see this behavior in the lesson video
// because our BrowserSync dev server was inserting a script
// making the last link NOT a second child

d3.selectAll('a:nth-child(2)')
  .attr('href', 'http://google.com')
  .classed('red', true)
  .html('Inventory <b>SALE</b>');
