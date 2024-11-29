#!/usr/bin/node
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');
const sinon =require('sinon');

describe("sendPaymentRequestToApi", function() {
    it("should call Utils.calculateNumber with the correct arguments", function() {
        const func = sinon.stub(Utils, 'calculateNumber');
        func.returns(10)
        const spy = sinon.spy(console, 'log');
        sendPaymentRequestToApi(100, 20)
        sinon.assert.calledWithExactly(func, 'SUM', 100, 20)
        sinon.assert.calledWithExactly(spy, 'The total is: 10')
        func.restore();
        spy.restore();
    });});