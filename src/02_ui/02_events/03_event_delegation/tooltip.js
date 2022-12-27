let tooltip;
function mouseoverHandler(event) {
    const target = event.target;
    const tooltipHTML = target.dataset.tooltip;
    if (!tooltipHTML)
        return;
    tooltip = createTooltip(tooltipHTML);
    document.body.append(tooltip);
    positionTooltip(target);
}
function createTooltip(tooltipHTML) {
    tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.innerHTML = tooltipHTML;
    return tooltip;
}
function positionTooltip(target) {
    const margin = 5;
    const targetBox = target.getBoundingClientRect();
    const left = tooltip.offsetWidth > targetBox.width
        ? targetBox.left
        : targetBox.left + (targetBox.width - tooltip.offsetWidth) / 2;
    let top = targetBox.top - margin - tooltip.offsetHeight;
    if (top < 0) {
        top = targetBox.bottom + margin;
    }
    tooltip.style.top = top + "px";
    tooltip.style.left = left + "px";
}
function mouseoutHandler(event) {
    const target = event.target;
    const tooltipHTML = target.dataset.tooltip;
    if (!tooltipHTML)
        return;
    tooltip.remove();
}
document.addEventListener("mouseover", mouseoverHandler);
document.addEventListener("mouseout", mouseoutHandler);
