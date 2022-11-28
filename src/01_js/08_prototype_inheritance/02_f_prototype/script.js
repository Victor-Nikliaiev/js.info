// let animal = {
//   eats: true,
// };

// function Rabbit(name) {
//   this.name = name;
// }

// Rabbit.prototype = animal;
// class Test {
//   s = 2;
// }
// Test.prototype.s = 3;
// console.log(new Test());
// console.log(Test.prototype.s);
// Rabbit.prototype = { constructor: animal };
// Rabbit.prototype = animal;
// Rabbit.prototype.constructor;

// let whiteRabbit = new Rabbit("White Rabbit");
// console.log(Rabbit.prototype.constructor.name);

// let blackRabbit = new whiteRabbit.constructor("Black Rabbit");
// console.log(blackRabbit.name);

// Homework

function NewObject() {}

let obj = new NewObject();
console.log(obj.constructor.name);
console.log(NewObject.cons);
