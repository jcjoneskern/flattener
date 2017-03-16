 var flatten = require("../flattener.js");

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
});
