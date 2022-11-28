// class CoffeeMachine {
//   waterAmount = 0;

//   constructor(power) {
//     this.power = power;
//     console.log(`Created a coffee machine, power: ${power}`);
//   }
// }

// let coffeeMachine = new CoffeeMachine(100);
// coffeeMachine.waterAmount = 200;

// class CoffeeMachine {
//   _waterAmount = 0;

//   set waterAmount(value) {
//     if (value < 0) {
//       value = 0;
//     }

//     this._waterAmount = value;
//   }

//   get waterAmount() {
//     return this._waterAmount;
//   }

//   constructor(power) {
//     this._power = power;
//   }

//   get power() {
//     return this._power;
//   }
// }

// let coffeeMachine = new CoffeeMachine(100);
// coffeeMachine.waterAmount = -10;
// console.log(coffeeMachine.waterAmount);
// coffeeMachine.power = 33;

// class CoffeeMachine {
//   #waterLimit = 200;

//   #fixWaterAmount(value) {
//     if (value < 0) return 0;
//     if (value > this.#waterLimit) return this.#waterLimit;
//   }

//   setWaterAmount(value) {
//     this.#waterLimit = this.#fixWaterAmount(value);
//   }

//   getWaterAmount() {
//     return this.#waterLimit;
//   }
// }

// let coffeeMachine = new CoffeeMachine();
// coffeeMachine.setWaterAmount(2000);
// console.log(coffeeMachine.getWaterAmount());

class CoffeeMachine {
  #waterAmount = 0;

  get waterAmount() {
    return this.#waterAmount;
  }

  set waterAmount(value) {
    if (value < 0) value = 0;
    this.#waterAmount = value;
  }
}

let machine = new CoffeeMachine();
machine.waterAmount = 100;
console.log(machine.waterAmount);
