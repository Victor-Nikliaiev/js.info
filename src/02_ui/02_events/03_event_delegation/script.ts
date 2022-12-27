const languagesTable = <HTMLTableElement>(
  document.getElementById("languagesTable")
);
const menu = document.getElementById("menu") as HTMLDivElement;

let selectedTd: HTMLTableCellElement;

languagesTable.onclick = function (event) {
  const td = (event.target as Element).closest("td");

  if (!td) return;

  if (!languagesTable.contains(td)) return;

  highlight(td);
};

function highlight(td: HTMLTableCellElement) {
  if (selectedTd) {
    selectedTd.classList.remove("highlight");
  }

  selectedTd = td;
  selectedTd.classList.add("highlight");
}

class Menu {
  _elem: HTMLElement;

  constructor(elem: HTMLElement) {
    this._elem = elem;
    elem.onclick = this.onClick.bind(this);
  }

  save() {
    alert("saving");
  }

  load() {
    alert("loading");
  }

  search() {
    alert("searching");
  }

  onClick(event: Event) {
    let action = (event.target as HTMLElement).dataset.action;

    if (action) {
      this[action]();
    }
  }
}

new Menu(menu);

document.addEventListener("click", (ev: Event) => {
  let target = ev.target as HTMLButtonElement;

  if (target.dataset.counter != undefined) {
    (target.value as unknown as number)++;
  }
});

document.addEventListener("click", (ev: Event) => {
  const id = (ev.target as HTMLElement).dataset.toggleId;

  if (!id) return;

  let elem = document.getElementById(id) as HTMLElement;
  elem.hidden = !elem.hidden;
});
