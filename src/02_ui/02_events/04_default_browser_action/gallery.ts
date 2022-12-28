const thumbs = document.getElementById("thumbs") as HTMLUListElement;
const largeImg = document.getElementById("largeImg") as HTMLImageElement;

thumbs.addEventListener("click", event => {
  const target = (event.target as HTMLElement).closest("a");
  if (!target) return;

  event.preventDefault();
  const href = target.href;
  const title = target.title;

  if (!href || !title) return;

  largeImg.src = href;
  largeImg.title = title;
});
