const grid = document.getElementById("grid") as HTMLTableElement;

const sortBy = {
  string(arr: HTMLTableRowElement[]) {
    arr.sort((tr1, tr2) => {
      return tr1.cells[1].innerText.localeCompare(tr2.cells[1].innerText);
    });
  },

  number(arr: HTMLTableRowElement[]) {
    arr.sort((tr1, tr2) => {
      return +tr1.cells[0].innerText - +tr2.cells[0].innerText;
    });
  },
};

grid.addEventListener("click", event => {
  const target = event.target as HTMLElement;

  if (target.tagName !== "TH") return;

  const trList = grid.querySelectorAll("tbody > tr");
  const sortType = target.dataset.type as string;
  let trArray = Array.from(trList);
  sortBy[sortType](trArray);

  grid.querySelector("tbody")?.append(...trArray);
});
