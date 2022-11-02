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
