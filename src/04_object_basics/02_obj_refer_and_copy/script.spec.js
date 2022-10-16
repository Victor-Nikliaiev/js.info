const { describe, it } = require("mocha");
const { assert } = require("chai");
const { test } = require("./script");

describe("Test func", () => {
  let user = {
    name: "John",
  };

  it("changes the value of object ", () => {
    test(user);
    assert.notEqual(user.name, "John");
  });

  it("return nothing ", () => {
    assert.isUndefined(test(user));
  });
});
