const sum = require("./sum");

it("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(2, 2)).toBe(4);
  expect(sum(2, 3)).toBe(5);
  expect(sum(2, 4)).toBe(6);
  expect(sum(2, 5)).toBe(7);
});
