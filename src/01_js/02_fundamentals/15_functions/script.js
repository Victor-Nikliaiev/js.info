// function showMessage() {
// 	console.log("Hello, everyone!");
// }

// showMessage();
// showMessage();

// function showMessage() {
// 	let message = "Hello, I'm JavaScript";

// 	console.log(message);
// }

// showMessage();
// console.log(message);

// let userName = "John";

// function showMessage() {
// 	let message = "Hello, " + userName;
// 	console.log(message);
// }

// showMessage();

// let userName = "John";

// function showMessage() {
// 	userName = "Bob";

// 	let message = "Hello,  " + userName;
// 	console.log(message);
// }

// console.log(userName);
// showMessage();
// console.log(userName);

// let userName = "John";

// function showMessage() {
// 	let userName = "Bob";
// 	let message = `Hello, ${userName}!`;
// }

// console.log(userName);
// showMessage();
// console.log(userName);

// function showMessage(from, to) {
// 	console.log(`${from}: ${to}`);
// }

// showMessage("Ann", "Hello, everyone!");
// showMessage("Ann", "What's up?");

// function showMessage(from, text) {
// 	from = `*${from}*`;
// 	console.log(`${from}: ${text}`);
// }

// let from = "Ann";

// showMessage(from, "Hello");
// showMessage("Victor");

// function showMessage(from, text = "No text given") {
// 	console.log(`${from}: ${text}`);
// }

// showMessage("Ann");
// showMessage("Victor", "Can come again please?");

// let userName = "Victor";

// const formateFullName = name => `${name} Nikliaiev`;

// function showMessage(
// 	text = "No text was given",
// 	from = formateFullName(userName)
// ) {
// 	console.log(`${from}: ${text}`);
// }

// showMessage("Hi");
// showMessage("What's your name?");

// function showMessage(from, text) {
// 	if (text === undefined) {
// 		text = "no text given";
// 	}

// 	console.log(from + ": " + text);
// }

// function showMessage(from, text) {
// 	text = text || "no text given";
// 	console.log(`${from}: ${text}`);
// }

// // showMessage("Ann");
// console.log(null ?? 1 ?? undefined);

// function showCount(count) {
// 	console.log(count ?? "unknown");
// }

// showCount(0);

// function sum(a, b) {
// 	if (isNaN(a + b)) throw new Error("One or both number are not numbers...");
// 	return a + b;
// }

// console.log(sum(2, 8));

// function checkAge(age) {
// 	if (age >= 18) return true;
// 	return confirm("Do you have permission from your parents?");
// }

// let age = +prompt("What's your age?");

// if (checkAge(age)) {
// 	alert("Congrats! You're full of control here.");
// } else {
// 	alert("Sorry, you're too young to watch this without parent's permission");
// }

// function showMovie(age) {
// 	if (age < 18) return;

// 	console.log("Showing the movie!");
// }

// // showMovie(18);
// showMovie(10);

// function doNothing() {}

// console.log(doNothing() === undefined);

// function doNothing() {
// 	return;
// }

// console.log(doNothing() === undefined);

// function showPrime(number) {
// 	for (let i = 2; i <= number; i++) {
// 		if (!isPrime(i)) continue;
// 		console.log(i);
// 	}
// }

// function isPrime(n) {
// 	for (let i = 2; i < n; i++) {
// 		if (n % i == 0) return false;
// 	}
// 	return true;
// }

// showPrime(100);

// Homework
// 1
// function checkAge(age) {
// 	if (age >= 18) {
// 		return true;
// 	} else {
// 		return confirm("Do you have a permission from your parents?");
// 	}
// }

// function checkAge(age) {
// 	if (age >= 18) return true;
// 	return confirm("Is it allowed by your parents?");
// }

// 2
// function checkAge(age) {
// 	return age >= 18 ? true : confirm("Is it ok with your parents you do so?");
// }

// function checkAge(age) {
// 	return age >= 18 || confirm("Did parents allow you?");
// }

// 3
// function getMin(a, b) {
// 	return a > b ? b : a;
// }

// console.log(getMin(4, 10));
// console.log(getMin(4, 2));

// 4
function pow(a, b) {
	let pow = a;

	while (--b) {
		pow *= a;
	}
	return pow;
}

console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(1, 100));
