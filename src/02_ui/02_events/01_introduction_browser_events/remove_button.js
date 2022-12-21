// One variant

// const removeButton = document.createElement("button");
// removeButton.innerText = "[x]";
// removeButton.classList.add("remove-button");
// removeButton.onclick = function () {
//   console.log("test");
// };

// const paneList = document.querySelectorAll(".pane");
// console.log(paneList);

// function clickHandler() {
//   const parentPane = this.parentElement;
//   parentPane.remove();
// }

// paneList.forEach(paneElement => {
//   const clonedElement = removeButton.cloneNode(true);
//   clonedElement.addEventListener("click", clickHandler);
//   paneElement.append(clonedElement);
// });

// Another variant

const paneList = document.querySelectorAll(".pane");

paneList.forEach(paneElement => {
  paneElement.insertAdjacentHTML(
    "afterbegin",
    '<button class="remove-button">[x]</button>'
  );
  paneElement.firstElementChild.onclick = function () {
    this.parentElement.remove();
  };
});
