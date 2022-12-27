const liList = document.querySelectorAll("li");

liList.forEach(li => {
  const span = document.createElement("span");
  li.prepend(span);
  span.append(span.nextSibling as ChildNode);
});

const tree = document.getElementById("tree") as HTMLUListElement;

tree.addEventListener("click", ev => {
  let target = ev.target as HTMLSpanElement;

  if (target.tagName !== "SPAN") return;

  const ul = target.parentNode?.querySelector("ul");

  if (!ul) return;

  ul.hidden = !ul.hidden;
});
