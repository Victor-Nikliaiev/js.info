/* eslint-disable no-unused-vars */
function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}

let loadScriptPromiseFunc = function (src) {
  return new Promise(function (resolve, reject) {
    loadScript(src, (err, script) => {
      if (err) reject(err);
      else resolve(script);
    });
  });
};

function promisifyDecorator(f, manyArgs = false) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      function callback(err, ...results) {
        if (err) {
          reject(err);
        } else {
          resolve(manyArgs ? results : results[0]);
        }
      }

      args.push(callback);

      f.call(this, ...args);
    });
  };
}

const loadScriptPromise = promisifyDecorator(loadScript);
loadScriptPromise(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodashddd.js"
)
  .then(script => console.log(script.src))
  .catch(err => console.log(err));
