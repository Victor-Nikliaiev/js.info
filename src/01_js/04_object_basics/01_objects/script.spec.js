const { describe, it } = require("mocha");
const { assert } = require("chai");
const { isEmpty, sumSalaries, multiplyNumeric } = require("./script");

describe("IsEmpty Function", () => {
  it("returns true for an empty object", () => {
    assert.isTrue(isEmpty({}));
  });

  it("returns false if a property exists", () => {
    assert.isFalse(isEmpty({ test: true }));
  });
});

describe("Sum salaries function", () => {
  it("returns sum of salaries in object", () => {
    const obj = { John: 300, Ann: 200, Sim: 100 };
    assert.equal(sumSalaries(obj), 600);
  });

  it("returns 0 if there are no properties", () => {
    assert.equal(sumSalaries({}), 0);
  });
});

describe("Multiply all numeric properties by 2 function", () => {
  it("multiplies all numeric by 2", () => {
    let menu = {
      width: 100,
      height: 300,
      title: "My title",
    };

    multiplyNumeric(menu);

    assert.equal(menu.width, 200);
    assert.equal(menu.height, 600);
    assert.equal(menu.title, "My title");
  });

  it("returns nothing", () => {
    assert.isUndefined(multiplyNumeric({}));
  });
});
