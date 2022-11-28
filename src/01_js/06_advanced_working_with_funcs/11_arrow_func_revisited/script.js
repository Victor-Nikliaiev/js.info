// let group = {
//   title: "Our Group",
//   students: ["John", "Pete"],

//   showList() {
//     this.students.forEach(student =>
//       console.table(`${this.title}: ${student}`)
//     );
//   },
// };

// group.showList();

// function defer(func, ms) {
//   return function () {
//     setTimeout(() => func.apply(this, arguments), ms);
//   };
// }

function sayHi(who) {
  console.table([`Hello, ${who}`]);
}

function defer(func, ms) {
  return function (...args) {
    const ctx = this;
    setTimeout(function () {
      return func.apply(ctx, args);
    }, ms);
  };
}
const sayHiDeferred = defer(sayHi, 3000);
sayHiDeferred("Vic");
