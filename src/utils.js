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
