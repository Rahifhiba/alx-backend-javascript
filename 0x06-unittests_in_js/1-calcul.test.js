const assert = require("assert");
const calculateNumber = require('./1-calcul');


describe("calculateNumber", function() {
  it("checks if 1+3=4", function() {
    assert.equal(calculateNumber('SUM', 1, 3), 4);
  });
  it("checks if 7/2=3.5", function() {
    assert.equal(calculateNumber('DIVIDE', 7, 2), 3.5);
  });
  it("checks if -9-4=-13", function() {
    assert.equal(calculateNumber('SUBSTRACT',-9, 4), -13);
  });
  it("checks if 9.5-4=-5", function() {
    assert.equal(calculateNumber('SUBSTRACT',9.5, 4), 6);
  });
  it("checks if 10/0='Error''", function() {
    assert.equal(calculateNumber('DIVIDE',10, 0), 'Error');
  });
});