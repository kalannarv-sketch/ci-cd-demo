const { sum } = require("./script");

test("sum works correctly", () => {
  expect(sum(2, 3)).toBe(5);
});