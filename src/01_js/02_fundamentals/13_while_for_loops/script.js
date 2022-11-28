// let i = 0;

// while (i < 3) {
// 	console.log(i);
// 	i++;
// }

// let i = 10;
// while (i) {
// 	console.log(i);
// 	i--;
// }

// let i = 5;

// while (i) console.log(i--);

// let condition = false;
// do {
// 	console.log(condition);
// 	condition = !condition;
// } while (condition);

// let i = 0;

// for (i = 0; i < 3; i++) {
// 	console.log(i);
// }

// let i = 0;

// for (; i < 4; i++) {
// 	console.log(i);
// }

// for (;;) {
// 	console.log("I love JS");
// }

// let sum = 0;

// for (;;) {
// 	let userInput = +prompt("Enter a number");
// 	if (!userInput) break;
// 	sum += userInput;
// }

// alert(`The sum is: ${sum}`);

// for (let i = 0; i < 10; i++) {
// 	if (!(i % 2)) continue;
// 	console.log(i);
// }

// for (let i = 0; i < 10; i++) {
// 	if (i % 2) {
// 		console.log(i);
// 	}
// }
// outer: for (let i = 0; i < 3; i++) {
// 	for (let j = 0; j < 3; j++) {
// 		let inputValue = prompt(`(${i}, ${j}):`, "");
// 		if (!inputValue) break outer;
// 	}
// }
// alert("Done!");

// starter: if (true) {
// 	let userInput = prompt("Number or 'Exit'");

// 	if (userInput === "Exit") alert("We're getting break ");
// 	if (userInput === "Exit") break starter;

// 	alert("Done!");
// }

// function test() {
// 	starter: {
// 		let userInput = prompt("Number or 'Exit'");
// 		if (userInput === "Exit") alert("We're getting break ");
// 		if (userInput === "Exit") break starter;
// 		alert("Done!");
// 	}
// }

// test();

//Homework
// 1
// let i = 3;

// while (i) {
// 	console.log(i--);
// }

//2
// let i = 0;
// while (++i < 5) console.log(i); // 1 2 3 4

// let j = 0;
// while (j++ < 5) console.log(j); //  1 2 3 4 5

//3
// for (let i = 2; i <= 10; i++) {    ----------------------------------------------
// 	if (i % 2) continue;
// 	console.log(i);
// }

// // 4
// let i = 0;
// while (i < 3) console.log(`number: ${i++}`); ----------------------------------

// 5
// while (+prompt("Enter a number greater than 100") <= 100);

// let range = +prompt("Enter the value to list the pride numbers");

// 6
// let up = 10;
// let isPrime = true;
// for (let i = 2; i <= up; i++) {
// 	for (let j = 2; j < i; j++) {
// 		if (i % j) {
// 			isPrime = true;
// 			continue;
// 		}
// 		isPrime = false;
// 		break;
// 	}
// 	if (isPrime) console.log(i);
// }

let upNumber = 10;

nextPrime: for (let i = 2; i <= upNumber; i++) {
	for (let j = 2; j < i; j++) {
		if (i % j == 0) continue nextPrime;
	}
	console.log(i);
}
