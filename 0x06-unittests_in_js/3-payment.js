#!/usr/bin/node

const Utils = require('./utils')
function sendPaymentRequestToApi(totalAmount, totalShipping){
    const tot = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    return `The total is: ${Math.round(tot)}`
}

module.exports = sendPaymentRequestToApi;
