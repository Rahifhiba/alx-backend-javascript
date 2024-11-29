#!/usr/bin/node

const Utils = require('./utils')
function sendPaymentRequestToApi(totalAmount, totalShipping){
    const tot = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${(tot)}`)
}

module.exports = sendPaymentRequestToApi;
