var container = document.getElementById("container");
container.addEventListener("click", function (ev) {
    var target = ev.target;
    if (!target.classList.contains("remove-button"))
        return;
    var pane = target.closest(".pane");
    pane.remove();
});
