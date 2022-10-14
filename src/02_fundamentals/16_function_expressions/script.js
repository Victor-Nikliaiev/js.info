"use strict";
// function sayHi() {
// 	alert("Hello");
// }

// let sayHi = function () {
// 	alert("Hello");
// };

// console.log(sayHi);
// function sayHi() {
// 	console.log("Hello!");
// }

// let func = sayHi;
// func();
// sayHi();

// let sayHi = function () {
// 	console.log("Hello!");
// };

// let func = sayHi;

// function ask(question, yes, no) {
// 	if (confirm(question)) yes();
// 	else no();
// }

// function showOk() {
// 	alert("You agreed.");
// }

// function showCancel() {
// 	alert("You canceled.");
// }

// ask("Are you agreed?", showOk, showCancel);

// function ask(question, yes, no) {
// 	if (confirm(question)) yes();
// 	else no();
// }

// ask(
// 	"Do you agree?",
// 	function () {
// 		alert("You agreed.");
// 	},
// 	function () {
// 		alert("You canceled.");
// 	}
// );

// sayHi("John");

// function sayHi(name) {
// 	console.log(`Hi, ${name}`);
// }

// sayHi("John");

// let sayHi = function (name) {
// 	console.log(`Hello, ${name}`);
// };

// let age = 10;

// if (age < 18) {
// 	function welcome() {
// 		console.log("hello!");
// 	}
// } else {
// 	function welcome() {
// 		console.log("Greetings!");
// 	}
// }

// welcome();

// let age = 16;

// if (age < 18) {
// 	welcome();

// 	function welcome() {
// 		console.log("Hello!");
// 	}

// 	welcome();
// } else {
// 	function welcome() {
// 		console.log("Greetings!");
// 	}
// }

// let age = 12;
// let welcome;

// if (age < 18) {
// 	welcome = function () {
// 		console.log("Hi!!");
// 	};
// } else {
// 	welcome = function () {
// 		console.log("Greetings!");
// 	};
// }

// welcome();

let age = 22;

let welcome =
	age < 18
		? function () {
				console.log("Hi :D");
		  }
		: function () {
				console.log("Greetings! :D");
		  };

welcome();
