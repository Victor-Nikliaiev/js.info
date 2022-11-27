import { counter } from "./state.js";

export function plusOne() {
  counter.count++;
  console.log(counter.count);
}

let button = document.createElement("button");

button.onclick = () => {
  plusOne();
};

button.textContent = "+1";

document.body.append(button);
