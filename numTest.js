// Test case is written in this file
const sum = require('./num');

test1('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});