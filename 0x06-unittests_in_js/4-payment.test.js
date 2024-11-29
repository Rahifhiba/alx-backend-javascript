#!/usr/bin/node
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const sinon =require('sinon')

describe("sendPaymentRequestToApi", function() {
    it("checks ifutils match ", function() {
        const spy = sinon.spy(Utils, 'calculateNumber');
        spy.return(10);
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledWith(spy, 'SUM', 100, 20);
        spy.restore();
    })})