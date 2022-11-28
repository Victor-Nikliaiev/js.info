// let user = {
//   name: "Victor",
//   surname: "Onlight",
//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },
// };

// console.log(user.fullName);

// const user = {
//   name: "Justine",
//   isAllowedToWatch: false,

//   set age(value) {
//     if (typeof value !== "number") return;
//     this.age = value;

//     if (value < 18) {
//       this.isAllowedToWatch = false;
//       return;
//     }

//     this.isAllowedToWatch = true;
//   },
// };

// console.table(user);
// user.age = 20;
// console.table(user);

// let user = {
//   name: "Victor",
//   surname: "Onlight",

//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },

//   set fullName(value) {
//     const arrValue = value.split(" ");

//     if (arrValue.length < 2 || arrValue.length > 2) return;

//     [this.name, this.surname] = value.split(" ");
//   },
// };

// console.table(user);
// user.fullName = "Alice Cooper";
// console.table(user);

// let user = {
//   name: "Victor",
//   age: 20,

//   get isAbleToWatch() {
//     return this.age >= 18;
//   },
// };

// console.table(user);

// let user = {
//   name: "Vic",
//   surname: "Onlight",
// };

// Object.defineProperty(user, "fullName", {
//   get() {
//     return `${this.name} ${this.surname}`;
//   },

//   set(value) {
//     [this.name, this.surname] = value.split(" ");
//   },
//   enumerable: true,
// });

// console.table(user);

// let user = {
//   get name() {
//     return this._name || "Victor";
//   },

//   set name(value) {
//     if (value.length < 4) {
//       throw new Error("Name is too short");
//     }
//     this._name = value;
//   },
// };
// Object.defineProperty(user, "_name", {
//   enumerable: false,
//   writable: true,
//   configurable: false,
// });

// user.name = "Pete";
// user.name = "Steve";
// console.table(user);

// const User = function userClass(name, birthday) {
//   if (!new.target) {
//     return new userClass(name, birthday);
//   }

//   this.name = name;
//   this.birthday = birthday;

//   Object.defineProperty(this, "age", {
//     get() {
//       let yearNow = new Date().getFullYear();
//       let birthYear = this.birthday.getFullYear();

//       return yearNow - birthYear;
//     },
//     enumerable: true,
//   });
// };

// let user = User("Vic", new Date(1989, 2, 23));
// console.log(user.age);

const User = function UserClass({ name, birthday }) {
  if (!new.target) {
    return new UserClass({ name, birthday });
  }
  this.name = name;
  this.birthday = birthday;

  Object.defineProperties(this, {
    age: {
      get() {
        const birthYear = this.birthday.getFullYear();
        const yearNow = new Date().getFullYear();
        return yearNow - birthYear;
      },
      enumerable: true,
      configurable: false,
    },
    isAbleToWatch: {
      get() {
        return this.age >= 18;
      },

      enumerable: true,
      configurable: false,
    },
  });
};

const user = User({ name: "Victor", birthday: new Date(1989, 2, 23) });
console.log(user);
console.table(user);
