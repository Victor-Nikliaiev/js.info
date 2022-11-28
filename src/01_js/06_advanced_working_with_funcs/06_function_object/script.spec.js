import { describe, it, before } from "mocha";
import { assert } from "chai";
import { makeCounter, sum } from "./script.js";

let counter;

before(() => {
  counter = new makeCounter();
});

false &&
  describe("makeCounter function:", () => {
    it("should return the next number:", () => {
      assert.equal(counter(), 1);
    });

    it("sets given value", () => {
      counter.set(10);
      assert.equal(counter(), 11);
    });

    it("decreases given number by one", () => {
      counter.decrease();
      assert.equal(counter(), 11);
    });
  });

describe("sum function:", () => {
  it("returns sum with arbitrary amount of brackets", () => {
    assert.equal(sum(1)(2), 3);
    assert.equal(sum(1)(5), 6);
    assert.equal(sum(-1)(-9)(20), 10);
  });
});
