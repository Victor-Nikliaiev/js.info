/* eslint-disable no-unused-vars */
import alert from "alert";

// let user = {
//   name: "John",
//   age: 30,

//   toString() {
//     return `{name: ${this.name}, age: ${this.age}}`;
//   },
// };

// alert(user);

// let student = {
//   name: "John",
//   age: 30,
//   isAdmin: false,
//   courses: ["html", "css", "js"],
//   spouse: null,
// };

// let json = JSON.stringify(student);
// const test = () => {
//   return 55;
// };

// let json = JSON.stringify(test.toString());
// console.log(json);
// let j = JSON.parse(json);

// let user = {
//   sayHi() {
//     alert("Hello");
//   },
//   [Symbol("id")]: 1,
//   something: undefined,
// };

// alert(JSON.stringify(user));

// let meetup = {
//   title: "Conference",
//   room: {
//     number: 23,
//     participants: ["john", "ann"],
//   },
// };

// alert(JSON.stringify(meetup));

// let room = {
//   number: 23,
// };

// let meetup = {
//   title: "Conference",
//   participants: ["john", "ann"],
// };

// meetup.place = room;
// room.occupiedBy = meetup;
// alert(JSON.stringify(meetup, ["title", "participants"]));

// let room = {
//   number: 23,
// };

// let meetup = {
//   title: "Conference",
//   participants: [{ name: "John" }, { name: "Alice" }],
//   place: room,
// };

// room.occupiedBy = meetup;

// alert(
//   JSON.stringify(meetup, (key, value) => {
//     if (key === "occupiedBy") return;
//     return value;
//   })
// );

// let user = {
//   name: "John",
//   age: 25,
//   roles: {
//     isAdmin: false,
//     isEditor: true,
//   },
// };

// console.log(JSON.stringify(user, null, "---"));

// let room = {
//   number: 23,
//   toJSON() {
//     return this.number;
//   },
// };

// let meetup = {
//   title: "Conference",
//   room,
// };

// console.log(JSON.stringify(room));
// console.log(JSON.stringify(meetup));

// let numbers = '["test", 1, 2, 3, 4, 5]';
// console.log(JSON.parse(numbers));

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
// let meetup = JSON.parse(str);
// console.log(meetup.date.getDate?.());

// let meetup = JSON.parse(str, (key, value) => {
//   if (key === "date") return new Date(value);
//   return value;
// });

// console.log(meetup.date.getDate());

// let schedule = `{
//     "meetups": [
//         {"title": "Conference", "date": "2017-11-30T12:00:00.000Z" },
//         {"title": "Birthday", "date": "1989-03-23T12:00:00.000Z"}
//     ]
// }`;

// schedule = JSON.parse(schedule, (key, value) => {
//   if (key === "date") return new Date(value);
//   return value;
// });

// console.log(schedule.meetups[1].date.toLocaleString());

// Homework
// 1
// let user = {
//   name: "John Smith",
//   age: 35,
// };

// let json = JSON.stringify(user);
// let johnSmith = JSON.parse(json);
// console.log(johnSmith);

// 2
let room = {
  number: 23,
};

let meetup = {
  title: "Conference",
  occupiedBy: [{ name: "John" }, { name: "Alice" }],
  place: room,
};

// Circular references
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(
  JSON.stringify(
    meetup,
    (key, value) => {
      if (key && value == meetup) return;
      return value;
    },
    2
  )
);
