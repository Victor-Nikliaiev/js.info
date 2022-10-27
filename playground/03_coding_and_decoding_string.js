function codeString(str) {
  let min = 49;
  let max = 122;
  let codedString = "";
  let keys = [];

  for (let char of str) {
    const randomCharNumber = Math.floor(Math.random() * (max - min + 1) + min);
    codedString += String.fromCharCode(randomCharNumber);
    keys.push(char.codePointAt(0).toString(7));
  }

  return { codedString, keys };
}

let cs = codeString(`
  Hello, my dear friend!
  My name is V, and I want to tell you something
  `);
console.log(cs);

function decodeString(keys) {
  let originalString = "";
  for (let code of keys) {
    originalString += String.fromCharCode(parseInt(code, 7));
  }

  return originalString;
}

console.log(decodeString(cs.keys));
