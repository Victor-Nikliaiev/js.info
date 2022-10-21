/* eslint-disable no-undef */

import { describe, it } from "mocha";
import { assert, expect } from "chai";
import sinon from "sinon";
import { getRoundedNumber } from "./index.js";

// import { hasFraction } from "./index.js";

false &&
  describe("hasFraction func", () => {
    it("returns true for 3.14", () => {
      assert.isTrue(hasFraction(3.14));
    });

    it("return false for 3", () => {
      assert.isFalse(hasFraction(3));
    });
  });

describe("roundNumber func", () => {
  it("with precision 2 returns 1.43 for number 1.434454544", () => {
    assert.equal(getRoundedNumber(1.434454544, 2), 1.43);
  });

  it("with precision 0 returns original number", () => {
    assert.equal(getRoundedNumber(3.323, 0), 3.323);
  });

  it("with precision -3 for number 4 returns 0.004", () => {
    assert.equal(getRoundedNumber(4, -3), 0.004);
  });

  it("if type of either argument isn't 'number' throws an error", () => {
    assert.throws(
      () => getRoundedNumber("sdsd", 3),
      "Type of given argument isn't a number"
    );
    assert.throws(
      () => getRoundedNumber(3, "ewew"),
      "Type of given argument isn't a number"
    );
  });
});
