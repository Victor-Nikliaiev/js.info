import { describe, it } from "mocha";
import { assert } from "chai";
import { test } from "./script.js";

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
