const getTimeFromInputElements = require('../getTimeFromInputElements');

let time = getTimeFromInputElements;
test('Check input', () => {
  expect(Number.isNaN(time[0])).not.toBeNaN();
  expect(Number.isNaN(time[1])).not.toBeNaN();
  expect(Number.isNaN(time[2])).not.toBeNaN();
});