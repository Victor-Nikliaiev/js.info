// let x = 1;

// if (x > 0) console.log("x is greater than 0");
// console.log(!true);
// console.log(!0);

// let str = "some data";

// if (!!!str) {
// 	console.log("Not authorized!");
// }

// console.log(Boolean("non-empty string"));
// console.log(Boolean(null));

// Homework
// 1

// console.log(null || 2 || undefined); // 2

// 2
// console.log(console.log(1) || 2 || console.log(3)); // 1  2

//3
// console.log(1 && null && 2); //null

// 4
// console.log(console.log(1) && console.log(2));

// 5
// console.log(null || (2 && 3) || 4);

// 6
// let age = 91;

// if (age >= 14 && age <= 90) {
// 	console.log("Your age is proper");
// }

// 7
let age = 12;

// if (age <= 14 && age >= 90)
// if (!(age >= 14 && age <= 90)) {
// 	console.log("True");
// }

// if (-1 || 0) console.log("first"); // -1
// if (-1 && 0) console.log("second"); // x
// if (null || (-1 && 1)) console.log("third"); // 1

let user = prompt("Who's there?");

if (user == "Admin") {
	let password = prompt("Password?");

	if (password == "TheMaster") {
		alert("Welcome!");
	} else if (!!!password) {
		alert("Canceled.");
	} else {
		alert("Wrong password");
	}
} else if (!!!user) {
	alert("Canceled.");
} else {
	alert("I don't know you");
}
