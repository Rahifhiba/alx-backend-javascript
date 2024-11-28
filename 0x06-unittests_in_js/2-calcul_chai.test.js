const chai = require("chai");
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');


describe("calculateNumber", function() {
    it("checks if 1.4+4.5=6", function() {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
      });
      it("checks if 1.4-4.5=-4", function() {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
      });
      it("checks if 1.4/4.5=0.2", function() {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
      });
      it("checks if 1.4/0= error", function() {
        expect( calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
      });
    });
