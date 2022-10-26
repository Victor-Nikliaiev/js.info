import { before, describe, it } from "mocha";
import { assert } from "chai";
import {
  Calculator,
  camelize,
  copySorted,
  filterRange,
  filterRangeInPlace,
  getAverageAge,
  getFullNamedUsers,
  getNamesArray,
  groupById,
  sortByAge,
  sortInDecreasingOrder,
  unique,
} from "./script.js";

describe("camelize function:", () => {
  let examples = [
    ["background-color", "backgroundColor"],
    ["list-style-image", "listStyleImage"],
    ["-webkit-transition", "WebkitTransition"],
  ];

  examples.forEach(([task, result]) => {
    it(`returns "${result}" from "${task}" `, () => {
      assert.equal(camelize(task), result);
    });
  });
});

describe("filterRange function:", () => {
  let arr = [2, 23, 1, 6, 11];

  it("returns an array of filter range:", () => {
    assert.deepEqual(filterRange(arr, 1, 10), [2, 1, 6]);
  });

  it("returns empty array, in case of argument of empty array:", () => {
    assert.deepEqual(filterRange([], 1, 10), []);
  });

  it("doesn't change original array.", () => {
    let savedCopy = [...arr];
    filterRange(arr);
    assert.deepEqual(savedCopy, arr);
  });
});

describe("filterRangeInPlace:", () => {
  it("modifies original array in given range.", () => {
    let arr = [2, 5, 12, 9, 32, 1];
    filterRangeInPlace(arr, 1, 10);
    assert.deepEqual(arr, [2, 5, 9, 1]);
  });

  it("returns nothing", () => {
    let arr = [3, 1, 3, 6, 10];
    assert.isUndefined(filterRangeInPlace(arr, 1, 4));
  });
});

describe("sortInDecreasingOrder", () => {
  it("sorts an array in decreasing order with modification.", () => {
    let arr = [5, 2, 1, -10, 8];
    sortInDecreasingOrder(arr);
    assert.deepEqual(arr, [8, 5, 2, 1, -10]);
  });

  it("returns nothing", () => {
    assert.isUndefined(sortInDecreasingOrder([1, 4, 3]));
  });
});

describe("sortedCopy function:", () => {
  it("returns sorted array of strings values", () => {
    let arr = ["HTML", "JavaScript", "CSS"];
    assert.deepEqual(copySorted(arr), ["CSS", "HTML", "JavaScript"]);
  });

  it("doesn't change original array", () => {
    let arr = ["HTML", "JavaScript", "CSS"];
    let arrClone = [...arr];
    copySorted(arr);
    assert.deepEqual(arr, arrClone);
  });

  it("returns empty array if empty array or not array type or no argument were given", () => {
    assert.deepEqual(copySorted([]), []);
    assert.deepEqual(copySorted(3), []);
    assert.deepEqual(copySorted(), []);
  });
});

describe("Calculator function:", () => {
  let calculator;

  before(() => {
    calculator = new Calculator();
  });

  it("returns 11 with calculate(6 + 5)", () => {
    assert.equal(calculator.calculate("6 + 5"), 11);
  });

  it("returns 8 with calculate(18 - 10)", () => {
    calculator.addMethod("-", (a, b) => a - b);
    assert.equal(calculator.calculate("18 - 10"), 8);
  });

  it("returns 6 with calculate(2 * 3)", () => {
    calculator.addMethod("*", (a, b) => a * b);
    assert.equal(calculator.calculate("2 * 3"), 6);
  });

  it("returns 8 with calculate(2 ** 3)", () => {
    calculator.addMethod("**", (a, b) => a ** b);
    assert.equal(calculator.calculate("2 ** 3"), 8);
  });

  it("returns 0.5 with calculate(1 / 2)", () => {
    calculator.addMethod("/", (a, b) => {
      return Math.round((a / b) * 100) / 100;
    });
    assert.equal(calculator.calculate("1 / 2"), 0.5);
  });

  it("throws an error adding a method which already exists", () => {
    assert.throws(
      () => calculator.addMethod("*", (a, b) => a * b),
      "Method '*' already exists."
    );
  });

  it("throws an error using a method that doesn't exists", () => {
    assert.throws(
      () => calculator.calculate("3 % 2"),
      "Method '%' doesn't exist."
    );
  });

  it("throws new error if the string format in calculate func isn't correct", () => {
    const str = "";
    assert.throws(
      () => calculator.calculate(str),
      `String format isn't correct, given string is: '${str}'`
    );
  });
});

describe("getNamesArray function:", () => {
  it("it returns names from array of user objects.", () => {
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };
    let users = [john, pete, mary];

    assert.deepEqual(getNamesArray(users), ["John", "Pete", "Mary"]);
  });
});

describe("getFullNamedUsers function:", () => {
  it("returns an array with full-named users objects:", () => {
    let john = { name: "John", surname: "Smith", id: 1 };
    let pete = { name: "Pete", surname: "Hunt", id: 2 };
    let mary = { name: "Mary", surname: "Key", id: 3 };

    let users = [john, pete, mary];
    let usersMapped = [
      { fullName: "John Smith", id: 1 },
      { fullName: "Pete Hunt", id: 2 },
      { fullName: "Mary Key", id: 3 },
    ];

    assert.deepEqual(getFullNamedUsers(users), usersMapped);
  });
});

describe("sortByAge function:", () => {
  it("returns array of users sorted by age.", () => {
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };

    let arr = [pete, john, mary];

    sortByAge(arr);

    assert.deepEqual(arr, [john, mary, pete]);
  });
});

describe("getAverageAge function:", () => {
  it("returns average age from given array of users.", () => {
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 29 };
    let users = [john, pete, mary];

    assert.strictEqual(getAverageAge(users), 28);
  });
});

describe("unique function: ", () => {
  it("returns an array of unique strings from the given array", () => {
    let strings = [
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

    assert.deepEqual(unique(strings), ["Hare", "Krishna", ":-O"]);
  });

  it("doesn't not change original array:", () => {
    let strings = ["Hare", "Hare", "Krishna", "Krishna"];
    unique(strings);
    assert.deepEqual(strings, ["Hare", "Hare", "Krishna", "Krishna"]);
  });
});

describe("groupById function:", () => {
  it("returns keyed object from given user object", () => {
    let users = [
      { id: "john", name: "John Smith", age: 20 },
      { id: "ann", name: "Ann Smith", age: 24 },
      { id: "pete", name: "Pete Peterson", age: 31 },
    ];

    let usersById = groupById(users);

    assert.deepEqual(usersById[users[1].id], users[1]);
  });

  it("works with an empty array", () => {
    const users = [];

    assert.deepEqual(groupById(users), {});
  });
});
