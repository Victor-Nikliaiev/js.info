import { describe, it } from "mocha";
import { assert } from "chai";
import { byField, inArray, inBetween, makeArmy } from "./script.js";

describe("inBetween and inArray function: ", () => {
  it("filters given array by range of (3, 6)", () => {
    let arr = [1, 2, 3, 4, 5, 6, 7];
    assert.deepEqual(arr.filter(inBetween(3, 6)), [3, 4, 5, 6]);
  });

  it("returns filtered array by array [[1, 2, 10]] ", () => {
    let arr = [1, 2, 3, 4, 5, 6, 7];
    assert.deepEqual(arr.filter(inArray([1, 2, 10])), [1, 2]);
  });
});

describe("byField function:", () => {
  let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" },
  ];

  it("sorts  by 'name' field", () => {
    let nameSortedKey = [
      { name: "Ann", age: 19, surname: "Hathaway" },
      { name: "John", age: 20, surname: "Johnson" },
      { name: "Pete", age: 18, surname: "Peterson" },
    ];

    let nameSortedAnswer = users.sort(byField("name"));

    assert.deepEqual(nameSortedKey, nameSortedAnswer);
  });

  it("sorts by 'age' field", () => {
    let ageSortedKey = [
      { name: "Pete", age: 18, surname: "Peterson" },
      { name: "Ann", age: 19, surname: "Hathaway" },
      { name: "John", age: 20, surname: "Johnson" },
    ];

    let ageSortedAnswer = users.sort(byField("age"));
    assert.deepEqual(ageSortedKey, ageSortedAnswer);
  });
});

describe("makeArmy function:", () => {
  it("returns correct number of function", () => {
    let army = makeArmy();

    assert.equal(army[0](), 0);
    assert.equal(army[5](), 5);
    assert.equal(army[8](), 8);
  });
});
