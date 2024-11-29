const chai = require("chai");
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');


describe("calculateNumber", function() {
  it("checks if 1+3=4", function() {
    expect(calculateNumber('SUM', 1.2, 3.23)).to.equal(4);
  });
  it("checks if 1.4-4.5=-4", function() {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4)
  });
  it("checks if -9-4=-13", function() {
    expect(calculateNumber('SUBTRACT',-9.5, 4.5)).to.equal(-14);
  });
  it("checks if 9.5-4=-5", function() {
    expect(calculateNumber('SUBTRACT',9.5, 4.5)).to.equal(5);
  });
  it("checks if 10.5/2='Error''", function() {
    expect(calculateNumber('DIVIDE',10.5, 2)).to.equal(5.5);
  });
  it("checks if 10/0='Error''", function() {
    expect(calculateNumber('DIVIDE',10, 0)).to.equal('Error');
  });
  it("checks if 0/0='Error''", function() {
    expect(calculateNumber('DIVIDE',0, 0)).to.equal('Error');
  });

});
