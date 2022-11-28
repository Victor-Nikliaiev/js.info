console.log("\u2190".repeat(30));
console.log("Written by \xA9 Victor Onlight.");
console.log("\u2192".repeat(30));

console.log("𝒳".length);
console.log("😂".length);
console.log("😂".codePointAt(0).toString(16));

let s1 = "S\u0307\u0323";
console.log(s1);
let s2 = "S\u0323\u0307";
console.log(s2);
console.log(s1.normalize() === s2.normalize());
console.log(s1.normalize());
console.log(s2.normalize());
