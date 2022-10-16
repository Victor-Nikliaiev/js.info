import { describe, it } from "mocha";
import { assert } from "chai";
import { makeDeepCopy } from "./01_deepClone_testing.js";

describe("makeDeepCopy function", () => {
  it("checks if copy is deep", () => {
    const user = {
      name: "Victor",
      age: 33,
      sizes: {
        height: 205,
        weight: {
          beforeEating: 93,
          afterEating: 94,
        },
      },
    };
    let deepClone = makeDeepCopy(user);

    assert.notEqual(user.sizes.weight, deepClone.sizes.weight);
  });
});
