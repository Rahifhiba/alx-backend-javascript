#!/usr/bin/node

const Utils = require('./utils')
function sendPaymentRequestToApi(totalAmount, totalShipping){
    const tot = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    return `The total is: ${tot}`
}

module.exports = Utils
