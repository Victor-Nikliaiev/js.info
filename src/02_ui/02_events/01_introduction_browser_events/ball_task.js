import { getDocumentCoords } from "../../../utils.js";

const { ball, field } = getHTMLObjects();
document.addEventListener("click", cursorCoordinatesHandler);

function moveTheBall(clientX, clientY) {
  const { x, y } = correctBallCoords(getCenteredBallCoords(clientX, clientY));

  ball.style.left = x + "px";
  ball.style.top = y + "px";
}

function getHTMLObjects() {
  return {
    ball: document.querySelector("img#ball"),
    field: document.querySelector("div#field"),
  };
}

function cursorCoordinatesHandler(event) {
  const isOutOfBoundaries = checkBoundaries(event);
  if (isOutOfBoundaries) return;

  // console.log(event.clientX);
  console.log(event.clientY);
  moveTheBall(event.clientX, event.clientY);
}

function getCenteredBallCoords(clientX, clientY) {
  const { width, height } = ball.getBoundingClientRect();
  return {
    x: Math.round(clientX - width / 2 + window.scrollX),
    y: Math.round(clientY - height / 2) + window.scrollY,
  };
}

function checkBoundaries(event) {
  let fieldBox = field.getBoundingClientRect();

  if (event.clientX < fieldBox.left || event.clientX > fieldBox.right) {
    return true;
  }

  if (event.clientY < fieldBox.top || event.clientY > fieldBox.bottom) {
    return true;
  }

  return false;
}

function correctBallCoords({ x, y }) {
  let fieldBox = field.getBoundingClientRect();

  let left = fieldBox.left + field.clientLeft + window.scrollX;
  let rightBorder = fieldBox.width - field.clientLeft - field.clientWidth;
  let right =
    fieldBox.right -
    rightBorder -
    Math.round(ball.offsetWidth / 2) -
    window.scrollX;
  let top = fieldBox.top + field.clientTop + window.scrollY;
  let bottomBorder = fieldBox.height - field.clientHeight - field.clientTop;

  let bottom =
    fieldBox.bottom -
    bottomBorder -
    Math.round(ball.offsetHeight / 2) +
    window.scrollY;

  if (x < left) x = left;

  if (x > right) x = Math.round(right - ball.clientWidth / 2);

  if (y < top) y = top;

  if (y > bottom) y = Math.round(bottom - ball.clientHeight / 2);

  return { x, y };
}
