/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script loaded error for ${src}`));

  document.head.append(script);
}

loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodashddd.js",
  (err, script) => {
    if (err) {
      console.log(err.name + ": " + err.message);
      return;
    }
    console.log(`Cool, the script  ${script.src} is loaded`);
    console.log(_);
  }
);
