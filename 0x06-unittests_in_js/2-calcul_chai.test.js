const chai = require("chai");
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');


describe("calculateNumber", function() {
  it("checks if 1+3=4", function() {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
  });
  it("checks if 7/2=3.5", function() {
    expect(calculateNumber('DIVIDE', 7, 2)).to.equal(3.5);
  });
  it("checks if -9-4=-13", function() {
    expect(calculateNumber('SUBTRACT',-9, 4)).to.equal(-13);
  });
  it("checks if 10/0='Error''", function() {
    expect(calculateNumber('DIVIDE',10, 0)).to.equal('Error');
  });
  it("checks if 1.7 + 3.2 = 5 (rounding up and down)", function() {
    expect(calculateNumber('SUM', 1.7, 3.2)).to.equal(5);
  });

  it("checks if -1.4 + -3.6 = -5 (negative rounding)", function() {
    expect(calculateNumber('SUM', -1.4, -3.6)).to.equal(-5);
  });

});
