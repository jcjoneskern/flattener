 var flatten = require("../flattener");

describe("flattener", function() {
  it("removes brackets from [[1,2,3],4]", function() {
    expect(flatten([[1,2,3],4])).toBe([1,2,3,4]);
  });
  it("removes brackets from [[1,2,[3]],4]", function() {
    expect(flatten([[1,2,[3]],4])).toBe([1,2,3,4]);
  });
  it("removes brackets from [[1,[[2]],[3]],4]", function() {
    expect(flatten([[1,[[2]],[3]],4])).toBe([1,2,3,4]);
  });
  it("also works with words", function() {
    expect(flatten(['apple', ['banana', 'pear']])).toBe(['apple', 'banana', 'pear']);
  });
});
