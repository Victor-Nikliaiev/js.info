// let a = 2 + 2;

// switch (a) {
// 	case 3:
// 		console.log("Too small");
// 		break;
// 	case 4:
// 		console.log("Exactly");
// 		break;
// 	case 5:
// 		console.log("Too big");
// 		break;
// 	default:
// 		console.log("I don't know such values");
// }

// let a = 4;

// switch (a) {
// 	case 3:
// 		console.log("Too small");
// 		break;
// 	case 4:
// 		console.log("Exactly");
// 	case 5:
// 		console.log("Too Big!");
// 	default:
// 		console.log("I don't know such values!");
// }

// let a = "1";
// let b = 0;

// switch (+a) {
// 	case b + 1:
// 		console.log("Must run: as b + 1 = +a");
// }

// let a = 3;

// switch (a) {
// 	case 4:
// 		console.log("Right!");
// 		break;
// 	case 3:
// 	case 5:
// 		console.log("Wrong!");
// 		console.log("Why don't you take a math class?");
// 		break;

// 	default:
// 		console.log("The result is strange. Really.");
// }

// let arg = prompt("Enter a value: ", "");
// switch (arg) {
// 	case "0":
// 	case "1":
// 		alert("One or Zero");
// 		break;

// 	case "2":
// 		alert("Two");
// 		break;

// 	case 3:
// 		alert("Never executes!");
// 		break;
// 	default:
// 		alert("An unknown value");
// }

// Homework
// 1

// let browser = "Chrome";

// switch (browser) {
// 	case "Edge":
// 		console.log("You've got the Edge!");
// 		break;

// 	case "Chrome":
// 	case "Firefox":
// 	case "Safari":
// 	case "Opera":
// 		console.log("We support these browsers too");
// 		break;

// 	default:
// 		console.log("We hope that this page looks ok");
// }

// let browser = "Chrome";

// if (browser === "Edge") console.log("You've got the Edge!");
// else if (
// 	browser === "Chrome" ||
// 	browser === "Firefox" ||
// 	browser === "Safari" ||
// 	browser === "Opera"
// ) {
// 	console.log("Okey, we support these browsers too");
// } else {
// 	console.log("We hope this page looks ok!");
// }

// 2
// let a = +prompt("a?", "");

// if (a == 0) {
// 	alert(0);
// }
// if (a == 1) {
// 	alert(1);
// }
// if (a == 2 || a == 3) {
// 	alert("2, 3");
// }

let a = +prompt("a?", "");

switch (a) {
	case 0:
		alert(0);
		break;

	case 1:
		alert(1);
		break;

	case 2:
	case 3:
		alert("2, 3");
		break;
}
