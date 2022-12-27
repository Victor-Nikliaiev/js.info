const container = document.getElementById("container") as HTMLDivElement;
container.addEventListener("click", ev => {
  const target = ev.target as HTMLElement;

  if (!target.classList.contains("remove-button")) return;

  const pane = target.closest(".pane") as HTMLElement;
  pane.remove();
});
