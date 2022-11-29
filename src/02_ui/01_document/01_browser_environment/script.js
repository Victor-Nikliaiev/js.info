/* eslint-disable no-func-assign */
/* eslint-disable no-unused-vars */

import { delayDecorator } from "../../../utils.js";

console.log(`h: ${window.innerHeight}, w: ${window.innerWidth} `);

// window.sayHi();
// nastyBackground();
setBlackBackground();
// showBrowserInfo();
// showLocation();
changeLocation = delayDecorator(changeLocation, 2000);
// changeLocation();

function changeLocation() {
  if (confirm("Go to Wikihow?")) {
    location.href = "https://wikihow.com";
  }
}

function sayHi() {
  alert("hi");
}

function showLocation() {
  alert(location.href);
}

function showBrowserInfo() {
  alert(`Agent: ${navigator.userAgent}\nPlatform: ${navigator.platform}`);
}

function setBlackBackground() {
  document.body.style.background = "rgb(24, 22, 22)";
}

function setNastyBackground() {
  let toggle = false;
  setInterval(() => {
    if (toggle) {
      document.body.style.background = "green";
      toggle = !toggle;
      return;
    }
    document.body.style.background = "red";
    toggle = !toggle;
  }, 50);
}
