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
