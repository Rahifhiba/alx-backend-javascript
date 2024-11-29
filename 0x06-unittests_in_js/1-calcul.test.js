const assert = require("assert");
const calculateNumber = require('./1-calcul');


describe("calculateNumber", function() {
  it("checks if 1+3=4", function() {
    assert.equal(calculateNumber('SUM', 1.2, 3.23), 4);
  });
  it("checks if 1.4-4.5=-4", function() {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4)
  });
  it("checks if -9-4=-13", function() {
    assert.equal(calculateNumber('SUBTRACT',-9.5, 4.5), -14);
  });
  it("checks if 9.5-4=-5", function() {
    assert.equal(calculateNumber('SUBTRACT',9.5, 4.5), 5);
  });
  it("checks if 10.5/2='Error''", function() {
    assert.equal(calculateNumber('DIVIDE',10.5, 2), 5.5);
  });
  it("checks if 10/0='Error''", function() {
    assert.equal(calculateNumber('DIVIDE',10, 0), 'Error');
  });
  it("checks if 0/0='Error''", function() {
    assert.equal(calculateNumber('DIVIDE',0, 0), 'Error');
  });

});