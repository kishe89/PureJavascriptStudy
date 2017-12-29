"use strict"
let Reservation = {
    createReservation: function createReservation(passenger, flight) {
        return  {
            passengerInformation:passenger,
            flightInformation:flight
        };
    }
};


module.exports = Reservation;