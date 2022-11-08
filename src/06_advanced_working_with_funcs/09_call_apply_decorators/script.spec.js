/* eslint-disable no-func-assign */

import { describe, it } from "mocha";
import { assert } from "chai";
import sinon from "sinon";
import { spyDecorator } from "./script.js";

describe("spyDecorator function:", () => {
  it("saves all calls of function", () => {
    function work() {}

    work = spyDecorator(work);

    assert.deepEqual(work.calls, []);

    work(1, 2);
    assert.deepEqual(work.calls, [[1, 2]]);

    work(3, 3);
    assert.deepEqual(work.calls, [
      [1, 2],
      [3, 3],
    ]);
  });

  it("transparently wraps a function.", () => {});
});
