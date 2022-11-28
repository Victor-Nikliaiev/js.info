// let user = {
//   name: "John",
// };

// console.log(user);
// user = null;
// console.log(user);

// let user = {
//   name: "John",
// };

// let admin = user;
// user = null;

// console.log(admin);

function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman,
  };
}

let family = marry({ name: "John" }, { name: "Ann" });
console.log(family);

delete family.father;
delete family.mother.husband;
console.log(family);
family = null;
console.log(family);
