#!/usr/bin/node

const assert = require("assert");
const getPaymentTokenFromAPI = require("./6-payment_token")
describe("payement token", function () {

    it("test if payement token return true", function(done) {
        getPaymentTokenFromAPI(true)
        .then((r) => {
            assert.equal(r.data, 'Successful response from the API')
            done();
        })
        .catch((error) => done(error));
    })
})