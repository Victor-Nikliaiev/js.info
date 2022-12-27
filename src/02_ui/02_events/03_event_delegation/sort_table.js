const grid = document.getElementById("grid");
const sortBy = {
    string(arr) {
        arr.sort((tr1, tr2) => {
            return tr1.cells[1].innerText.localeCompare(tr2.cells[1].innerText);
        });
    },
    number(arr) {
        arr.sort((tr1, tr2) => {
            return +tr1.cells[0].innerText - +tr2.cells[0].innerText;
        });
    },
};
grid.addEventListener("click", event => {
    var _a;
    const target = event.target;
    if (target.tagName !== "TH")
        return;
    const trList = grid.querySelectorAll("tbody > tr");
    const sortType = target.dataset.type;
    let trArray = Array.from(trList);
    sortBy[sortType](trArray);
    (_a = grid.querySelector("tbody")) === null || _a === void 0 ? void 0 : _a.append(...trArray);
});
