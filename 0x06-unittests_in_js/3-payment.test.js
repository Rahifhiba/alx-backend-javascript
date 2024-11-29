#!/usr/bin/node
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const sinon =require('sinon')
const expect = require('chai').expect

describe("sendPaymentRequestToApi", function() {
    it("should call Utils.calculateNumber with the correct arguments", function() {
        const spy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith('SUM', 100, 20)).to.be.true;
        spy.restore();
    })})