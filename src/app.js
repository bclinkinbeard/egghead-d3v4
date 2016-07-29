function printValues (interpolator, name) {
  const intervals = [0, 0.5, 1];
  console.group(name);
  intervals.forEach(interval => console.log(interpolator(interval)));
  console.groupEnd();
}

const numberInterpolator = d3.interpolate(0, 100);
printValues(numberInterpolator, 'Numbers');

const stringInterpolator = d3.interpolate(
  '300 12px sans-serif',
  '500 36px Comic-Sans'
);
printValues(stringInterpolator, 'Strings');

const dateInterpolator = d3.interpolate(new Date(2016, 0, 1), new Date());
printValues(dateInterpolator, 'Dates');

const arrayInterpolator = d3.interpolate([0, 0], [100, 100]);
printValues(arrayInterpolator, 'Arrays');

const objectInterpolator = d3.interpolate({foo: 3}, {foo: 9});
printValues(objectInterpolator, 'Objects');

const cssInterpolator = d3.interpolate(
  'rotate(0deg)',
  'rotate(180deg)'
);
printValues(cssInterpolator, 'CSS');

const svgInterpolator = d3.interpolate(
  'translate(0, 0)',
  'translate(250, 100)'
);
printValues(svgInterpolator, 'SVG');

console.log(d3.quantize(svgInterpolator, 5));
