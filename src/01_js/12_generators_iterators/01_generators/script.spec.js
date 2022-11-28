import { describe, it } from "mocha";
import { assert } from "chai";
import { pseudoRandom } from "./script.js";

describe("pseudoRandom generator", () => {
  let g = pseudoRandom(1);

  it("return 16807 with seed 1", () => {
    assert.equal(g.next().value, 16807);
  });

  it("return 282475249 with seed 1", () => {
    assert.equal(g.next().value, 282475249);
  });

  it("return 1622650073 with seed 1", () => {
    assert.equal(g.next().value, 1622650073);
  });

  it("returns same value for the same seed", function () {
    let generator1 = pseudoRandom(123);
    let generator2 = pseudoRandom(123);

    assert.deepEqual(generator1.next(), generator2.next());
    assert.deepEqual(generator1.next(), generator2.next());
    assert.deepEqual(generator1.next(), generator2.next());
  });
});
