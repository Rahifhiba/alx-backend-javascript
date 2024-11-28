#!/usr/bin/node

const assert = require("assert");
const calculateNumber = require('./0-calcul');


describe("calculateNumber", function() {
  it("checks if 1+3=4", function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it("checks if 1+3.7=5", function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it("checks if 1.2+ 3.7=5", function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it("checks if -1.2+ 3.7=5", function() {
    assert.strictEqual(calculateNumber(-1.2, 3.7), 3);
  });
});