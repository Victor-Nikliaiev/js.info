/* eslint-disable no-unused-vars */

import { describe, it } from "mocha";
import { assert } from "chai";
import { getLastCharInString, getPositionOfLastChar } from "./utils.js";

false &&
  describe("getLastCharInString function", () => {
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

describe("getPositionOfLastChar function", () => {
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
