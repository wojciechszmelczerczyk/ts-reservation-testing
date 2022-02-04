import { expect } from "chai";
import { Reservation } from "../src/reservation";

describe("Change reservation stay period", function () {
  it("should change arrival when reservation is from the future, otherwise an error should be thrown", function () {
    //todo:
    const res = new Reservation("2021-05-15", 5);

    expect(() => {
      res.changeStayPeriod("1980-12-10", 3);
    }).to.throw(Error);

    const newArrival = "2100-11-17";

    res.changeStayPeriod(newArrival, 3);

    expect(res.arrival).to.be.equal(newArrival);
  });

  it("should change stay length when new value is positive and greater than 1", function () {
    //todo:
    const res = new Reservation("2021-04-15", 5);

    const newLength = 2;

    res.changeStayPeriod("2021-12-10", newLength);

    expect(res.numberOfNights).to.be.equal(2);
  });
  it("should throw an error when new length is defined and is lower than 1", function () {
    //todo:
    const res = new Reservation("2021-05-11", 3);

    expect(() => {
      res.changeStayPeriod("2021-12-10", 0);
    }).to.throw(Error);
  });

  it("should not change stay length when new length is greater than 366", function () {
    //todo:
    const startingNumberOfNight = 3;

    const res = new Reservation("2021-05-11", startingNumberOfNight);

    res.changeStayPeriod("2021-12-12", 367);

    expect(res.numberOfNights).to.be.equal(startingNumberOfNight);
  });
});
