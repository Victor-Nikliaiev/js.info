import { describe, it } from "mocha";
import { assert } from "chai";
import {
  formatDate,
  getDateAgo,
  getLastDayOfMonth,
  getLocalDay,
  getWeekDay,
} from "./script.js";

false &&
  describe("getWeekDay function:", () => {
    it("returns MO for 2015, February 2", () => {
      assert.equal(getWeekDay(new Date(2015, 1, 2)), "MO");
    });

    it("returns TU for 2016, May 3", () => {
      assert.equal(getWeekDay(new Date(2016, 4, 3)), "TU");
    });

    it("returns WE for 2016, June 8", () => {
      assert.equal(getWeekDay(new Date(2016, 5, 8)), "WE");
    });

    it("returns TH for 1989, March 23", () => {
      assert.equal(getWeekDay(new Date(1989, 2, 23)), "TH");
    });

    it("returns FR for 2017, October 20", () => {
      assert.equal(getWeekDay(new Date(2017, 9, 20)), "FR");
    });

    it("returns SA for 2019, September 7", () => {
      assert.equal(getWeekDay(new Date(2019, 8, 7)), "SA");
    });

    it("returns SU for 2020, December 20", () => {
      assert.equal(getWeekDay(new Date(2020, 11, 20)), "SU");
    });
  });

false &&
  describe("getLocalDay function", () => {
    it("returns MO for 2015, February 2", () => {
      assert.equal(getLocalDay(new Date(2015, 1, 2)), 1);
    });

    it("returns TU for 2016, May 3", () => {
      assert.equal(getLocalDay(new Date(2016, 4, 3)), 2);
    });

    it("returns WE for 2016, June 8", () => {
      assert.equal(getLocalDay(new Date(2016, 5, 8)), 3);
    });

    it("returns TH for 1989, March 23", () => {
      assert.equal(getLocalDay(new Date(1989, 2, 23)), 4);
    });

    it("returns FR for 2017, October 20", () => {
      assert.equal(getLocalDay(new Date(2017, 9, 20)), 5);
    });

    it("returns SA for 2019, September 7", () => {
      assert.equal(getLocalDay(new Date(2019, 8, 7)), 6);
    });

    it("returns SU for 2020, December 20", () => {
      assert.equal(getLocalDay(new Date(2020, 11, 20)), 7);
    });
  });

false &&
  describe("getDateAgo function:", () => {
    let date = new Date(2015, 0, 2);

    it("returns 1", () => {
      assert.equal(getDateAgo(date, 1), 1);
    });

    it("returns 31", () => {
      assert.equal(getDateAgo(date, 2), 31);
    });

    it("returns 365", () => {
      assert.equal(getDateAgo(date, 365), 2);
    });
  });

false &&
  describe("getLastDayOfMonth function:", () => {
    it("last day of 01.02.2012 - 29", () => {
      assert.equal(getLastDayOfMonth(2012, 1), 29);
    });

    it("last day of 01.03.2018 - 31", () => {
      assert.equal(getLastDayOfMonth(2018, 2), 31);
    });

    it("last day of 01.11.2018 - 30", () => {
      assert.equal(getLastDayOfMonth(2018, 10), 30);
    });
  });

describe("formateDate function:", () => {
  it("returns 'right now' if passed less 1 sec", () => {
    assert.equal(formatDate(new Date(new Date() - 1)), "right now");
  });

  it("returns 'n sec. ago if passed less than 1 minute", () => {
    assert.equal(formatDate(new Date(new Date() - 30 * 1000)), "30 sec. ago");
  });

  it("returns 'n min. age' if passed less than 1 hours ", () => {
    assert.equal(
      formatDate(new Date(new Date() - 5 * 60 * 1000)),
      "5 min. ago"
    );
  });

  it("returns date in format 'DD.MM.YY HH:mm' if passed more than 1 hours", () => {
    assert.equal(
      formatDate(new Date(2014, 2, 1, 11, 22, 33)),
      "01.03.14 11:22"
    );
  });
});
