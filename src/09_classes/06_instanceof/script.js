/* eslint-disable no-unused-vars */
// class Rabbit {}
// let rabbit = new Rabbit();

import alert from "alert";

// console.log(rabbit instanceof Rabbit);

// function Test() {}

// console.log(new Test() instanceof Test);

// const Hello = function HelloInner() {
//   let _name = null;

//   if (new.target) return HelloInner();

//   class HelloClass {
//     get name() {
//       return _name;
//     }

//     set name(value) {
//       _name = value;
//     }
//   }

//   return new.target ? HelloInner() : new HelloClass();
// };

// let hello = new Hello();
// console.log(hello.name);
// console.log(hello.constructor.name);
// let hello2 = new hello.constructor();
// console.log((hello2.name = "s"));

class Typed {
  #value;
  #isFreezed;

  #getType(value) {
    if (value === undefined) return "undefined";
    if (Array.isArray(value)) return "array";
    if (isNaN(value) && typeof value === "number") return "NaN";
    if (value === null) return "null";
    if (value.toString().split(" ")[0].includes("class")) return "class";

    return typeof value;
  }

  constructor(value) {
    this.#value = value;
  }

  [Symbol.toPrimitive](hint) {
    return this.#value;
  }

  /**
   * get and set this variable value
   */
  get value() {
    return this.#value;
  }

  set value(val) {
    if (this.#isFreezed) return;

    if (this.#getType(this.#value) !== this.#getType(val)) {
      throw new Error("Type cannot be changed.");
    }

    this.#value = val;
  }
  /**
   * Returns type of this value
   */
  get type() {
    return this.#getType(this.#value);
  }

  /**
   * Freeze and prevent  this variable value from any assignment changes
   */
  freeze() {
    this.#isFreezed = true;
  }

  /**
   *  Unfreeze this variable value for any assignment changes
   */
  unfreeze() {
    this.#isFreezed = false;
  }
  /**
   *  Returns current status of variable value.
   * = true if freezed, and  = false if not freezed
   */
  get isFreezed() {
    return this.#isFreezed;
  }
}
// let title = new Type("Rabbit");
// console.log(title.type);

// let title = new Type({ name: "Vic" });

// title.freeze();
// title.value.age = 33;
// console.log(title.value);
// title.unfreeze();
// alert(title.value);

// let wasUsed = new Typed(false);
// alert(wasUsed);
// wasUsed.value = true;
// wasUsed.freeze();
