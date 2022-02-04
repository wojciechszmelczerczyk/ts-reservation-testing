"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var reservation_1 = require("../src/reservation");
describe("Change reservation stay period", function () {
    it("should change arrival when reservation is from the future, otherwise an error should be thrown", function () {
        //todo:
        var res = new reservation_1.Reservation("2021-04-15", 5);
        // expect(res.changeStayPeriod("1980-10-10")).to.be.equal("");
        (0, chai_1.expect)(res.numberOfNights).to.equal(5);
        (0, chai_1.expect)(res.arrival).to.equal("2021-04-15");
    });
    it.skip("should change stay length when new value is positive and greater than 1", function () {
        //todo:
    });
    it.skip("should throw an error when new length is defined and is lower than 1", function () {
        //todo:
        var res = new reservation_1.Reservation("2021-05-11", 3);
        (0, chai_1.expect)(res.changeStayPeriod("2021-06-11", 0.5)).to["throw"]("Number of nights cannot be less than 1");
    });
    it.skip("should not change stay length when new length is greater than 366", function () {
        //todo:
    });
});
