/* eslint-disable no-undef */

// describe("pow", function () {
//   describe("raises x to power 3", function () {
//     function makeTest(x) {
//       let expected = x * x * x;
//       it(`${x} in the power 3 is ${expected}`, () => {
//         assert.equal(pow(x, 3), expected);
//       });
//     }

//     for (let x = 1; x <= 5; x++) {
//       makeTest(x);
//     }
//   });

//   describe("NaN checks", function () {
//     it("for negative n the result is NaN", function () {
//       assert.isNaN(pow(2, -1));
//     });

//     it("for non-integer n the result is NaN", function () {
//       assert.isNaN(pow(2, 1.5));
//     });
//   });
// });

// describe("test", function () {
//   before(() => console.log("Testing started -  before all tests"));
//   after(() => console.log("Testing finished - after all tests"));

//   beforeEach(() => console.log("Before a test - enter a test"));
//   afterEach(() => console.log("After a test - exit a test"));

//   it("test 1", () => console.log(1));
//   it("test 2", () => console.log(2));
// });

// Homework
describe("Raises x to power n", () => {
  it("5 in the power of 1 equals 5", () => {
    assert.equal(pow(5, 1), 5);
    console.log(pow(5, 1));
  });

  it("5 in the power of 2 equals 25", () => {
    assert.equal(pow(5, 2), 25);
    console.log(pow(5, 2));
  });

  it("5 in power of 3 equals 125", () => {
    assert.equal(pow(5, 3), 125);
    console.log(pow(5, 3));
  });
});
