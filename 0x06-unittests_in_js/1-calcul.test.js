const assert = require("assert");
const calculateNumber = require('./1-calcul');


describe("calculateNumber", function() {
  it("checks if 1.4+4.5=6", function() {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it("checks if 1.4-4.5=-4", function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it("checks if 1.4/4.5=0.2", function() {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it("checks if 1.4/0= error", function() {
    assert.equal( calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
