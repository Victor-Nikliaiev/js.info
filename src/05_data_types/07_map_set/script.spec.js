import { describe, it } from "mocha";
import { assert } from "chai";
import { aclean, unique } from "./script.js";

function intersection(arr1, arr2) {
  return arr1.filter(item => arr2.includes(item));
}

false &&
  describe("unique function:", () => {
    it("returns only unique values from given array", () => {
      let values = [
        "Hare",
        "Krishna",
        "Hare",
        "Krishna",
        "Krishna",
        "Krishna",
        "Hare",
        "Hare",
        ":-O",
      ];

      assert.deepEqual(unique(values), ["Hare", "Krishna", ":-O"]);
    });

    it("returns an empty array if such was given as an argument", () => {
      assert.deepEqual(unique([]), []);
    });

    it("doesn't not change original array: ", () => {
      let values = [
        "Hare",
        "Krishna",
        "Hare",
        "Krishna",
        "Krishna",
        "Krishna",
        "Hare",
        "Hare",
        ":-O",
      ];

      unique(values);

      assert.deepEqual(values, [
        "Hare",
        "Krishna",
        "Hare",
        "Krishna",
        "Krishna",
        "Krishna",
        "Hare",
        "Hare",
        ":-O",
      ]);
    });
  });

describe("aclean function", () => {
  it("returns exactly one word from anagram set:", () => {
    let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

    let result = aclean(arr);
    assert.equal(result.length, 3);

    assert.equal(intersection(result, ["nap", "PAN"]).length, 1);
    assert.equal(
      intersection(result, ["teachers", "cheaters", "hectares"]).length,
      1
    );
    assert.equal(intersection(result, ["ear", "era"]).length, 1);
  });

  it("is case-insensitive", () => {
    let arr = ["era", "EAR"];
    assert.equal(aclean(arr).length, 1);
  });
});
