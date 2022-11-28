import { describe, it, beforeEach, afterEach } from "mocha";
import { assert } from "chai";
import sinon from "sinon";
import { calculator } from "./sctipt.js";
import name from "prompt-sync";

describe("calculator", () => {
  describe("when 2 or 3 entered", function () {
    beforeEach(() => {
      // sinon.stub(name(), "prompt");
      prompt.onCall(0).returns("2");
      prompt.onCall(0).returns("3");

      calculator.read();
    });

    afterEach(() => {
      prompt.restore();
    });

    it("the read get two values and saves them as object properties", () => {
      assert.equal(calculator.a, 2);
      assert.equal(calculator.b, 3);
    });

    it("the sum is 5", () => {
      assert.equal(calculator.sum(), 5);
    });

    it("the multiply equals 6", () => {
      assert.equal(calculator.mul(), 6);
    });
  });
});
