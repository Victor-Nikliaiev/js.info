import { describe, it } from "mocha";
import { assert } from "chai";
import { countProperties, sumSalaries } from "./script.js";

false &&
  describe("sumSalaries function:", () => {
    it("it returns sum of salaries from given object", () => {
      let salaries = {
        John: 100,
        Pete: 300,
        Mary: 250,
      };
      assert.equal(sumSalaries(salaries), 650);
    });

    it("returns 0 to the empty object", () => {
      assert.equal(sumSalaries({}), 0);
    });
  });

describe("countProperties function:", () => {
  it("returns account of properties in object", () => {
    let user = {
      name: "John",
      age: 30,
    };

    assert.equal(countProperties(user), 2);
  });

  it("returns 0 for an empty object", () => {
    assert.equal(countProperties({}), 0);
  });

  it("doesn't count symbolic properties", () => {
    assert.equal(countProperties({ [Symbol("id")]: 1 }), 0);
  });
});
