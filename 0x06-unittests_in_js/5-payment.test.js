#!/usr/bin/node
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');
const sinon =require('sinon');

describe("sendPaymentRequestToApi", function() {
    let spy;
    beforeEach(function () {
        spy = sinon.spy(console, 'log');
      });
    afterEach(function (){
        spy.restore();
    })
    it("should call Utils.calculateNumber with 100 and 20", function() {
        sendPaymentRequestToApi(100, 20)
        sinon.assert.calledOnceWithExactly(spy, 'The total is: 120')
    });
    it("should call Utils.calculateNumber with 10 and 10", function() {
        sendPaymentRequestToApi(10, 10)
        sinon.assert.calledOnceWithExactly(spy, 'The total is: 20')
    });
});