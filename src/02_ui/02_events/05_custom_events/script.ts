const button = document.querySelector("button");
const eClick = new Event("click");
const h1elem = document.getElementById("h1elem");

// setTimeout(() => button?.dispatchEvent(eClick), 5000);
// document.addEventListener(
//   "hello",
//   function (event: CustomEvent) {
//     const target = event.target as HTMLElement;
//     alert(`Hello, ${event.detail.name} from ${target.tagName}, it works! :D`);
//     console.log(event.isTrusted);
//   }.bind(this)
// );

// const eHello = new Event("hello", { bubbles: true });
// const eHello2 = new CustomEvent("hello", {
//   bubbles: true,
//   detail: {
//     name: "Vic",
//   },
// });
// h1elem?.dispatchEvent(eHello);
// h1elem?.dispatchEvent(eHello2);

const menu = document.getElementById("menu") as HTMLButtonElement;
menu.onclick = () => {
  alert(1);
  setTimeout(() => {
    menu.dispatchEvent(new CustomEvent("menu-open", { bubbles: true }));
  });
  alert(2);
};

document.addEventListener("menu-open", () => {
  alert("nested");
});
