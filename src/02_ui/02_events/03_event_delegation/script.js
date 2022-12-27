var languagesTable = (document.getElementById("languagesTable"));
var menu = document.getElementById("menu");
var selectedTd;
languagesTable.onclick = function (event) {
    var td = event.target.closest("td");
    if (!td)
        return;
    if (!languagesTable.contains(td))
        return;
    highlight(td);
};
function highlight(td) {
    if (selectedTd) {
        selectedTd.classList.remove("highlight");
    }
    selectedTd = td;
    selectedTd.classList.add("highlight");
}
var Menu = /** @class */ (function () {
    function Menu(elem) {
        this._elem = elem;
        elem.onclick = this.onClick.bind(this);
    }
    Menu.prototype.save = function () {
        alert("saving");
    };
    Menu.prototype.load = function () {
        alert("loading");
    };
    Menu.prototype.search = function () {
        alert("searching");
    };
    Menu.prototype.onClick = function (event) {
        var action = event.target.dataset.action;
        if (action) {
            this[action]();
        }
    };
    return Menu;
}());
new Menu(menu);
document.addEventListener("click", function (ev) {
    var target = ev.target;
    if (target.dataset.counter != undefined) {
        target.value++;
    }
});
document.addEventListener("click", function (ev) {
    var id = ev.target.dataset.toggleId;
    if (!id)
        return;
    var elem = document.getElementById(id);
    elem.hidden = !elem.hidden;
});
