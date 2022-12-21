"use strict";
/* eslint-disable no-unused-vars */

export function getLastCharInString(str) {
  if (
    str === "" ||
    str === undefined ||
    typeof str === "object" ||
    typeof str === "function"
  )
    return null;

  str = str.toString();
  return str.toString()[str.length - 1];
}

export function getPositionOfLastChar(str) {
  if (str === undefined || str === "" || typeof str !== "string") return null;

  return str.length - 1;
}

export function checkUniqueArrayElement(arr, element) {
  if (!arr || element === undefined) {
    throw new Error("One or both arguments weren't provided");
  }

  const checkArrayIncludesElement = arr.includes(element);

  if (!checkArrayIncludesElement) return -1;

  if (isNaN(element)) {
    let foundCount = 0;

    arr.forEach(item => {
      if (isNaN(item)) {
        foundCount++;
      }
    });

    if (!foundCount) return -1;

    return foundCount === 1;
  }

  const isUnique = arr.indexOf(element) === arr.lastIndexOf(element);

  return isUnique;
}

export function getDateQuantity(timestamp) {
  if (isNotCorrectType(timestamp)) {
    throw new Error("Type of timestamp must be number");
  }

  const result = {};

  const measureItems = {
    years: 31_536_000 * 1000,
    months: 2_419_200 * 1000,
    days: 86_400 * 1000,
    hours: 3600 * 1000,
    minutes: 60 * 1000,
    seconds: 1000,
    milliseconds: 1,
  };

  Object.entries(measureItems).reduce((state, [stage, currentMeasure]) => {
    return measure({ state, currentMeasure, stage });
  }, timestamp);

  if (!Object.keys(result).length) return { milliseconds: 0 };

  return result;

  function measure({ state, currentMeasure, stage }) {
    if (state % currentMeasure !== state) {
      result[stage] = Math.floor(state / currentMeasure);
      return state % currentMeasure;
    }

    return state;
  }

  function isNotCorrectType(timestamp) {
    return typeof timestamp !== "number";
  }
}

export function bench(
  { funcArray, circlesQuantity = 1e5, repeatTimes = 40 },
  manager
) {
  const result = {};

  funcArray.forEach((fn, index) => {
    try {
      result[index + 1] = getTotalTime(fn);
    } catch ({ name, message }) {
      result[index + 1] = `${name}: ${message}`;
    }
  });

  return result;

  function getTotalTime(fn) {
    let totalTime = 0;

    for (let i = 0; i < repeatTimes; i++) {
      totalTime += getRunTime(fn);
    }

    return totalTime;
  }

  function getRunTime(fn) {
    const start = Date.now();

    for (let i = 0; i < circlesQuantity; i++) {
      manager(fn);
    }

    const end = Date.now();
    return end - start;
  }
}

export function delayDecorator(f, ms) {
  return new Proxy(f, {
    apply(target, thisArg, args) {
      setTimeout(() => target.apply(thisArg, args), ms);
    },
  });
}

export function throttleDecorator(func, ms) {
  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }
    isThrottled = true;

    func.apply(this, arguments);

    setTimeout(function () {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

export function makeObservable(target, handlers = Symbol("handlers")) {
  target[handlers] = [];
  target.observe = function (handler) {
    this[handlers].push(handler);
  };

  return new Proxy(target, {
    set(target, prop, value, receiver) {
      if (Array.isArray(target) && prop === "length") {
        return true;
      }

      let success = Reflect.set(...arguments);
      if (success) {
        target[handlers].forEach(handler => handler(prop, value));
      }

      return success;
    },
  });

  // Example of using:
  /**
   let user = {};
  user = makeObservable(user);
  user.observe((key, value) => {
    console.log(`SET: ${key}: ${value}`);
  });

  user.name = "Vic";

   */
}

export const scrollHeight = Math.max(
  document.body.scrollHeight,
  document.documentElement.scrollHeight,
  document.body.offsetHeight,
  document.documentElement.offsetHeight,
  document.body.clientHeight,
  document.documentElement.clientHeight
);

export function getScrollbarWidth() {
  let div = document.createElement("div");

  div.style.overflowY = "scroll";
  div.style.width = "50px";
  div.style.height = "50px";

  document.body.append(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;

  div.remove();
  return scrollWidth;
}

export function getDocumentCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
    right: box.right + window.pageXOffset,
    bottom: box.bottom + window.pageYOffset,
    left: box.left + window.pageXOffset,
  };
}
