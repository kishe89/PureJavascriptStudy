"use strict";

let assert = require('assert');
let Reservation = require('./Reservation');
describe('CreateReservation()', function() {
    let testPassenger = {};
    let testFlight = {};
    before(function() {
        // runs before all tests in this block
        testPassenger = {
            firstName: "지운",
            lastName: "김"
        };
        testFlight = {
            number: '3443',
            carrier: '대한항공',
            destination: "순천"
        };
    });
    describe('CreateReservation(passenger, flight)', function() {
        it('inject passenger to passengerInformation', function() {

            let reservation = Reservation.createReservation(testPassenger,testFlight);
            assert.deepEqual(reservation.passengerInformation,testPassenger,'expected :'+testPassenger+'\n but not equal');
        });
        it('inject flight to flightInformation',function () {
            let reservation = Reservation.createReservation(testPassenger,testFlight);
            assert.deepEqual(reservation.flightInformation,testFlight,'expected :'+testFlight+'\n but not equal');
        });
    });
});