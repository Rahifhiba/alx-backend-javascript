#!/usr/bin/node
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const sinon =require('sinon');
const { expect } = require('chai');

describe("sendPaymentRequestToApi", function() {
    it("should call Utils.calculateNumber with the correct arguments", function() {
        const func = sinon.stub(Utils, 'calculateNumber');
        func.returns(10)
        sendPaymentRequestToApi(100, 20)
        sinon.assert.calledWith(func, 'SUM', 100, 20)
        sinon.assert.calledWith(sinon.spy(console, 'log'), 'The total is: 10')
        func.restore();
    });});