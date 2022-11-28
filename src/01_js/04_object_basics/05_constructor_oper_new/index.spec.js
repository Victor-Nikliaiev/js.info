/* eslint-disable no-undef */

// import { describe, it } from "mocha";
// import { assert } from "chai";
// import { User } from "./index.js";

// describe("User function", () => {
//   it("can it be called without 'new' operator", () => {
//     const user = User("Vic");
//     assert.equal(typeof user, "object");
//   });
// });

// describe("calculator", () => {
//   let calculator;

//   before(() => {
//     sinon.stub(window, "prompt");

//     prompt.onCall(0).returns("2");
//     prompt.onCall(1).returns("3");

//     calculator = new Calculator();
//     calculator.read();
//   });

//   it("the read method asks for two values using prompt and remember them in object properties", () => {
//     assert.equal(calculator.a, 2);
//     assert.equal(calculator.b, 3);
//   });

//   it("when 2 and 3 were entered, the sum is 5", () => {
//     assert.equal(calculator.sum(), 5);
//   });

//   it("when 2 and 3 were entered the product is 6", () => {
//     assert.equal(calculator.mul(), 6);
//   });
// });

describe("Accumulator", () => {
  beforeEach(() => {
    sinon.stub(window, "prompt");
  });

  afterEach(() => {
    prompt.restore();
  });

  it("initial value is an argument of the constructor", () => {
    let accumulator = new Accumulator(1);
    assert.equal(accumulator.value, 1);
  });

  it("after reading 0 the value is 1", () => {
    let accumulator = new Accumulator(1);
    prompt.returns(0);
    accumulator.read();
    assert.equal(accumulator.value, 1);
  });

  it("after reading 1 the value is 2", () => {
    let accumulator = new Accumulator(1);
    prompt.returns(1);
    accumulator.read();
    assert.equal(accumulator.value, 2);
  });
});
