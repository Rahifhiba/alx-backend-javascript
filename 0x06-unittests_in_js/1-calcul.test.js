const assert = require("assert");
const calculateNumber = require('./1-calcul');


describe("calculateNumber", function() {
  it("checks if 1+3=4", function() {
    assert.equal(calculateNumber('SUM', 1.2, 3.23), 4);
  });
  it("checks if 7.4/2=3.5", function() {
    assert.equal(calculateNumber('DIVIDE', 7.4, 2.5), 2.3333333333333335);
  });
  it("checks if -9-4=-13", function() {
    assert.equal(calculateNumber('SUBSTRACT',-9.5, 4.5), -14);
  });
  it("checks if 9.5-4=-5", function() {
    assert.equal(calculateNumber('SUBSTRACT',9.5, 4.5), 5);
  });
  it("checks if 10/0='Error''", function() {
    assert.equal(calculateNumber('DIVIDE',10, 0), 'Error');
  });
  it("checks if 0/0='Error''", function() {
    assert.equal(calculateNumber('DIVIDE',0, 0), 'Error');
  });

});