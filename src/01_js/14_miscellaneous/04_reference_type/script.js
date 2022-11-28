let user = {
  name: "John",
  sayHi() {
    console.log(`Hi, ${this.name}`);
  },
};

let hi = user.sayHi;
user.dd = hi;
user.dd();
