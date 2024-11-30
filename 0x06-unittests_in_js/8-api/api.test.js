#!/usr/bin/node
const request = require('request')
const assert = require('assert')

describe("index", function() {
    it("check if For the route GET /, return the message Welcome to the payment system", function() {
        request('http://localhost:7865', function (err, resp, body) {
            assert.equal(resp.statusCode, 200 );
            assert.equal(body, 'Welcome to the payment system');
        })

    })


});
