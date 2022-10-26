/* eslint-disable no-unused-vars */

import { describe, it } from "mocha";
import { assert } from "chai";
import {
  checkUniqueArrayElement,
  getLastCharInString,
  getPositionOfLastChar,
} from "./utils.js";

false &&
  describe("getLastCharInString function: ", () => {
    it("returns last char in string", () => {
      assert.equal(getLastCharInString("testing"), "g");
    });

    it("converts any type to string and return last character", () => {
      assert.equal(getLastCharInString(132), "2");
      assert.equal(getLastCharInString(true), "e");
    });

    it("returns null is empty string has been given", () => {
      assert.isNull(getLastCharInString(""));
    });

    it("returns null if no argument has been given", () => {
      assert.isNull(getLastCharInString());
    });

    it("returns null if object or function has been given", () => {
      assert.isNull(getLastCharInString({}));
      assert.isNull(getLastCharInString(() => {}));
    });
  });

false &&
  describe("getPositionOfLastChar function: ", () => {
    it("gets the position of the last char if string has been provided", () => {
      assert.equal(getPositionOfLastChar("test"), 3);
    });

    it("returns null if there was no string type", () => {
      assert.isNull(getPositionOfLastChar(true));
      assert.isNull(getPositionOfLastChar(32));
    });

    it("return  null if argument wasn't provided", () => {
      assert.isNull(getPositionOfLastChar());
    });

    it("return  null if empty string was provided", () => {
      assert.isNull(getPositionOfLastChar(""));
    });
  });

describe("checkUniqueArrayElement function:", () => {
  it("returns true if an element is unique in an array", () => {
    assert.isTrue(checkUniqueArrayElement(["js", "c++", "php", false], false));
  });

  it("returns false if an element isn't unique in an array", () => {
    assert.isFalse(checkUniqueArrayElement(["js", "c++", "js", "php"], "js"));
  });

  it("returns -1 if element wasn't found in an array", () => {
    assert.strictEqual(checkUniqueArrayElement(["js", "c++"], "php"), -1);
  });

  it("generates an error if there wasn't an element or an array provided.", () => {
    assert.throws(() => {
      checkUniqueArrayElement(["err"]);
    }, "One or both arguments weren't provided");

    assert.throws(() => {
      checkUniqueArrayElement(3);
    }, "One or both arguments weren't provided");
  });

  describe("✔ it handles NaN correctly:", () => {
    it("returns true if NaN is unique in array", () => {
      assert.isTrue(checkUniqueArrayElement(["2", 3, NaN, "4"], NaN));
    });

    it("returns false if NaN isn't unique in array", () => {
      assert.isFalse(checkUniqueArrayElement(["2", NaN, 3, NaN, "4"], NaN));
    });

    it("returns  -1 if NaN wasn't found in array", () => {
      assert.strictEqual(checkUniqueArrayElement(["2", 3, false], NaN), -1);
    });
  });
});
