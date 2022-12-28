const menu = document.getElementById("menu") as HTMLUListElement;

menu.onclick = function (event) {
  const target = event.target as HTMLLinkElement;

  if (target.tagName != "A") return;

  const href = target.getAttribute("href");
  console.log(href);

  return false;
};

const elem = document.getElementById("elem") as HTMLParagraphElement;

elem.oncontextmenu = function (event) {
  event.preventDefault();
  alert("Elem menu");
};

document.oncontextmenu = function (event) {
  if (event.defaultPrevented) return;

  event.preventDefault();
  alert("document menu");
};

document.addEventListener("click", event => {
  const target = (event.target as HTMLElement).closest(
    "a"
  ) as unknown as HTMLLinkElement;

  if (target?.tagName !== "A") return;

  event.preventDefault();

  if (confirm(`Do you want to go to ${target.href}?`)) {
    window.location = target.href as unknown as Location;
  }
});
