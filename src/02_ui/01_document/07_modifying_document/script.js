/* eslint-disable no-constant-condition */
/* eslint-disable no-undef */
/* eslint-disable no-func-assign */
/* eslint-disable no-unused-vars */

// let div = document.createElement("div");
// let textNode = document.createTextNode("Here I am :D");

// let div = document.createElement("div");
// div.className = "alert";
// div.innerHTML = "<strong>Hi, there!</strong> You've read an important message.";
// document.body.append(div);

// let ol = document.querySelector("ol#ol");

// const prependLi = document.createElement("li");
// prependLi.innerText = "prepend";
// ol.before("before");
// ol.after("after");

// ol.prepend(prependLi);

// const appendLi = document.createElement("li");
// appendLi.innerText = "append";
// ol.append(appendLi);

// // ol.before("<h1>Let's start</h1>", document.createElement("hr"));
// let hr = document.createElement("hr");

// ol.insertAdjacentHTML("beforebegin", "<h1>Let's start</h1>");
// ol.insertAdjacentElement("beforebegin", hr);
// hr.style.background = "red";

// let div = document.createElement("div");
// div.className = "alert";
// div.innerHTML = "<strong>Hi, there!</strong> You've read an important message.";
// document.body.append(div);

// delayDecorator(() => div.remove(), 3000)();

// let first = document.querySelector("#first");
// let firstClone = first.cloneNode(true);
// console.log(firstClone);

// let alertDiv = document.querySelector("div.alert");
// let alertDivClone = alertDiv.cloneNode(true);
// let strong = alertDivClone.querySelector("strong");
// strong.innerText = "Bye there!";
// alertDiv.append(alertDivClone);

// function getListContent() {
//   let fragment = new DocumentFragment();

//   for (let i = 1; i <= 10; i++) {
//     let li = document.createElement("li");
//     li.append(i);
//     fragment.append(li);
//   }

//   return fragment;
// }

// let ol = document.querySelector("#ol");
// ol.append(getListContent());

// delayDecorator(() => document.write(ol.outerHTML), 3000)();

// Homework
// 2

// let num = document.querySelector("#num");
// console.log(num);

// function clear(elem) {
//   elem.innerHTML = "";
// }

// clear(num);

// Homework
// Create a list

function createList() {
  let ul = document.createElement("ul");

  while (true) {
    let value = prompt("Enter a value: ");

    if (!value) break;

    let li = document.createElement("li");
    li.textContent = value;
    ul.append(li);
  }

  if (!ul.children.length) return "";

  return ul;
}
// document.body.insertAdjacentHTML("beforeend", "<h1>Created List</h1><hr />");
// document.body.append(createList());

// Create a tree from the object

let data = {
  Fish: {
    trout: {},
    salmon: {},
  },

  Tree: {
    Huge: {
      sequoia: {},
      oak: {},
    },
    Flowering: {
      "apple tree": {},
      magnolia: {},
    },
  },
};

// Create a tree from the object
function createTree(container, data) {
  for (let key in data) {
    let li = document.createElement("li");
    li.textContent = key;

    if (Object.keys(data[key]).length) {
      let ul = document.createElement("ul");
      createTree(ul, data[key]);
      li.append(ul);
    }

    container.append(li);
  }
}

// let container = document.querySelector("div#container");
// createTree(container, data);

// Show descendants in a tree
function showDescendants() {
  let tree = document.querySelector("ul#animals");

  for (let li of tree.querySelectorAll("li")) {
    let length = li.querySelectorAll("li").length;

    if (!length) continue;

    let textNode = li.firstChild;
    textNode.data += `[${length}]`;
  }
}
showDescendants();

// Create a calendar
let elem = document.querySelector("div#calendar");

function createCalendar(elem, year, month) {
  const weekList = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
  let mon = month - 1;
  const date = new Date(year, mon);

  let table = document.createElement("table");
  let thFragment = document.createDocumentFragment();

  weekList.forEach(day => {
    let th = document.createElement("th");
    th.append(day);
    thFragment.append(th);
  });

  table.append(thFragment);
  elem.append(table);

  let tr = document.createElement("tr");
  table.append(tr);

  for (let i = 0; i < getDay(date); i++) {
    tr.append(document.createElement("td"));
  }

  while (date.getMonth() == mon) {
    if (!tr) {
      tr = document.createElement("tr");
      table.append(tr);
    }

    if (tr.children.length === 7) {
      table.append(tr);
      tr = document.createElement("tr");
    }

    let td = document.createElement("td");
    td.innerHTML = date.getDate();
    tr.append(td);
    table.append(tr);

    date.setDate(date.getDate() + 1);
  }

  if (getDay(date) !== 0) {
    for (let i = getDay(date); i < 7; i++) {
      tr.append(document.createElement("td"));
    }
  }

  function getDay(date) {
    let day = date.getDay();

    if (day === 0) day = 7;
    return day - 1;
  }
}

createCalendar(elem, 2022, 12);

// Colored clock with setInterval

let timerId;
function update() {
  let date = new Date();

  let hh = document.querySelector("span#hh");
  let mm = document.querySelector("span#mm");
  let ss = document.querySelector("span#ss");

  hh.innerHTML = correctDate(date.getHours());
  mm.innerHTML = correctDate(date.getMinutes());
  ss.innerHTML = correctDate(date.getSeconds());

  function correctDate(number) {
    return number < 10 ? `0${number}` : number;
  }
}

function clockStart() {
  if (!timerId) {
    timerId = setInterval(update, 1000);
  }

  update();
}

function clockStop() {
  clearTimeout(timerId);
  timerId = 0;
}

// Insert the HTML in the list
function insertHTML(html, ul = document.querySelector("ul#ul")) {
  ul.children[0].insertAdjacentHTML("afterend", html);
}

insertHTML("<li>2</li><li>3</li>");

// Sort table by name
function sortTable() {
  let table = document.querySelector("table#table");
  let sortedRows = Array.from(table.tBodies[0].rows) // 1
    .sort((rowA, rowB) =>
      rowA.cells[0].innerHTML.localeCompare(rowB.cells[0].innerHTML)
    );

  table.tBodies[0].append(...sortedRows); // (3)

  // let tbody = document.querySelector("tbody");
  // let namesElements = [];
  // for (let row of tbody.rows) {
  //   namesElements.push(row);
  // }
  // namesElements.sort((a, b) => {
  //   return a.cells[0].textContent.localeCompare(b.cells[0].textContent);
  // });
  // for (let i = 0; i < tbody.rows.length; i++) {
  //   tbody.rows[i].replaceWith(namesElements[i].cloneNode(true));
  // }
}

sortTable();
