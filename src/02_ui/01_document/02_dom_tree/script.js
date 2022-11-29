/* eslint-disable no-func-assign */
/* eslint-disable no-unused-vars */

import { delayDecorator } from "../../../utils.js";

delayDecorator(() => {
  document.body.style.background = "black";
}, 3000)();

document.body.style.background = "red";
