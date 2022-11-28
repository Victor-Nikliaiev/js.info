import { describe, it } from "mocha";
import { assert } from "chai";
import { topSalary, topSalary2 } from "./script.js";

describe("topSalary function:", () => {
  it("returns name of top-paid person", () => {
    let salaries = {
      John: 100,
      Pete: 300,
      Mary: 250,
    };

    assert.equal(topSalary(salaries), "Pete");
  });

  it("returns 'null' if the salary object is empty", () => {
    assert.isNull(topSalary({}));
  });

  it("returns any of multiple top-paid persons", () => {
    let salaries = {
      John: 100,
      Pete: 300,
      Mary: 250,
      Steve: 300,
    };

    assert.equal(salaries[topSalary(salaries)], 300);
  });
});

describe("topSalary2 function:", () => {
  it("returns name of top-paid person", () => {
    let salaries = {
      John: 100,
      Pete: 300,
      Mary: 250,
    };

    assert.equal(topSalary2(salaries), "Pete");
  });

  it("returns 'null' if the salary object is empty", () => {
    assert.isNull(topSalary2({}));
  });

  it("returns any of multiple top-paid persons", () => {
    let salaries = {
      John: 100,
      Pete: 300,
      Mary: 250,
      Steve: 300,
    };

    assert.equal(salaries[topSalary2(salaries)], 300);
  });
});
