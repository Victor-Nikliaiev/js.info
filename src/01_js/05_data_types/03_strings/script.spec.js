import { describe, it } from "mocha";
import { assert } from "chai";
import {
  checkSpam,
  extractCurrencyValue,
  truncate,
  ucFirst,
} from "./script.js";

false &&
  describe("ucFirst function:", () => {
    it("return first letter uppercase", () => {
      let str = "test";
      assert.strictEqual(ucFirst(str), "Test");
    });

    it("return  empty string if argument was an empty string", () => {
      assert.strictEqual(ucFirst(""), "");
    });
  });

false &&
  describe("checkSpam function:", () => {
    it('contains "viagra" in the string', () => {
      assert.isTrue(checkSpam("'buy ViAgRA now'"));
    });

    it('contains "xxx" in the string', () => {
      assert.isTrue(checkSpam("free xxxxx"));
    });

    it("returns false if no viagra and xxx were found", () => {
      assert.isFalse(checkSpam("innocent rabbit"));
    });
  });

false &&
  describe("truncate function:", () => {
    it('truncates the string up to maxLength value putting  "..." in the end.', () => {
      assert.equal(
        truncate("What I'd like to tell on this topic is:", 20),
        "What I'd like to te..."
      );
    });

    it("returns the whole string if maxLength is more or equal to string length.", () => {
      assert.equal(truncate("Hi everyone!", 20), "Hi everyone!");
    });
  });

describe("extractCurrencyValue function:", () => {
  it("returns extracted currency value", () => {
    assert.strictEqual(extractCurrencyValue("$120"), 120);
  });
});
