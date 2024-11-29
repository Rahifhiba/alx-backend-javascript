#!/usr/bin/node
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const sinon =require('sinon')

describe("sendPaymentRequestToApi", function() {
    it("should call Utils.calculateNumber with the correct arguments", function() {
        const spy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledOnce(spy);
        sinon.assert.calledWith(spy, 'SUM', 100, 20);
        spy.restore();
    });});