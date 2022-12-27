var liList = document.querySelectorAll("li");
liList.forEach(function (li) {
    var span = document.createElement("span");
    li.prepend(span);
    span.append(span.nextSibling);
});
var tree = document.getElementById("tree");
tree.addEventListener("click", function (ev) {
    var _a;
    var target = ev.target;
    if (target.tagName !== "SPAN")
        return;
    var ul = (_a = target.parentNode) === null || _a === void 0 ? void 0 : _a.querySelector("ul");
    if (!ul)
        return;
    ul.hidden = !ul.hidden;
});
