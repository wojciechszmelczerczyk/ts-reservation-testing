export class Reservation {
  static DATE_FORMAT: string = "YYYY-MM-DD";
  arrival: string;
  numberOfNights: number;

  // constructor
  constructor(arrival: string, numberOfNights: number) {
    this.arrival = arrival;
    this.numberOfNights = numberOfNights;
  }

  // 1. should change arrival when reservation is from the future, otherwise an error should be thrown
  // 2. should change stay length when new value is positive and greater than 1
  // 3. should throw an error when new length is defined and is lower than 1
  // 4. should not change stay length when new length is greater than 366

  changeStayPeriod(
    newArrival: string,
    newLength?: number,
    today: string = new Date().toISOString().substring(0, 10)
  ) {
    let newArrivalTimestamp = new Date(newArrival).getTime();
    let todayTimestamp = new Date(today).getTime();

    if (newArrivalTimestamp > todayTimestamp) {
      // timestamp
      this.arrival = newArrival;
    } else {
      throw new Error("Wrong");
    }
    // 3
    if (newLength < 1) {
      throw new Error("Number of nights cannot be less than 1");
      // 2
    } else if (newLength >= 1 && newLength < 367) {
      this.numberOfNights = newLength;
      // 4
    } else {
      this.numberOfNights = this.numberOfNights;
    }
  }
}
