const { describe, it } = require("mocha");
const { assert } = require("chai");
const { pow } = require("./script");

describe("Raises x to power n", () => {
  it("5 in the power of 1 equals 5", () => {
    assert.equal(pow(5, 1), 5);
    console.log(pow(5, 1));
  });

  it("5 in the power of 2 equals 25", () => {
    assert.equal(pow(5, 2), 25);
    console.log(pow(5, 2));
  });

  it("5 in power of 3 equals 125", () => {
    assert.equal(pow(5, 3), 125);
    console.log(pow(5, 3));
  });
});
