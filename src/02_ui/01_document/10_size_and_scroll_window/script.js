/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
/* eslint-disable no-undef */
/* eslint-disable no-func-assign */

import { getScrollbarWidth, scrollHeight } from "../../../utils.js";

/* eslint-disable no-unused-vars */

// console.log(document.documentElement.clientWidth);
// console.log(document.documentElement.clientHeight);
// let div = document.querySelector("div");
// console.log(window.innerWidth - document.documentElement.clientWidth);

// console.log(scrollHeight);
// console.log(document.documentElement.scrollHeight);

function createFixedButton({
  text = "fixedButtonExample",
  top = 0,
  right = 0,
} = {}) {
  let button = document.createElement("button");
  button.innerText = text;

  button.style.position = "fixed";
  button.style.right = right + "px";
  button.style.top = top + "px";

  return button;
}
console.log(window.scrollX);
console.log(window.scrollY);

let scrollBy20px = createFixedButton({
  text: "Scroll 20px bottom",
});
scrollBy20px.onclick = () => {
  window.scrollBy({ behavior: "smooth", left: 0, top: 20 });
};

let scrollToZero = createFixedButton({ text: "ScrollTo ZeroPoint", top: 40 });
scrollToZero.onclick = () => {
  window.scrollTo({ behavior: "smooth", left: 0, top: 0 });
};

let link = document.querySelector("a#testLink");

const scrollIntoViewButton = createFixedButton({
  text: "scrollIntoViewButton",
  top: 80,
});

scrollIntoViewButton.onclick = () => {
  link.scrollIntoView({ behavior: "smooth", block: "center" });
};

// document.body.append(scrollBy20px, scrollToZero, scrollIntoViewButton);
const overflowHiddenButton = createFixedButton({
  text: "document.body.style.overflow = ‘hidden’",
});

overflowHiddenButton.onclick = () => {
  let scrollbarSize = getScrollbarWidth();
  document.body.style.overflow = "hidden";
  document.documentElement.style.paddingRight = scrollbarSize + "px";
  console.log(scrollbarSize);
};

const overflowNormal = createFixedButton({
  text: "document.body.style.overflow = ‘’",
  top: 25,
});
overflowNormal.onclick = () => {
  document.body.style.overflow = "";
  document.documentElement.style.paddingRight = 0;
};
document.body.append(overflowHiddenButton, overflowNormal);
