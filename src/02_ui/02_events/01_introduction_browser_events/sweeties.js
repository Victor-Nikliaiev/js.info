const title = document.querySelector("span.title");
const ul = document.querySelector("#sweeties > ul");

title.onclick = function () {
  this.classList.toggle("open");
  ul.classList.toggle("open");
};
