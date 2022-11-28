/* eslint-disable no-unused-vars */

// class ValidationError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = this.constructor.name;
//   }
// }

// function test() {
//   throw new ValidationError("Whoops");
// }

// try {
//   test();
// } catch (err) {
//   console.log(err.name);
//   console.log(err.message);
// }

// class ValidationError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "ValidationError";
//   }
// }

// function readUser(json) {
//   let user = JSON.parse(json);
//   if (!user.name) {
//     throw new ValidationError("No field: name");
//   }

//   if (!user.age) {
//     throw new ValidationError("No field: age");
//   }

//   return user;
// }

// try {
//   let user = readUser('{"bad":  "data"c}');
// } catch (err) {
//   if (err instanceof ValidationError) {
//     console.log("Invalid data: " + err.message);
//   } else if (err instanceof SyntaxError) {
//     console.log("JSON Error: ", +err.message);
//   } else {
//     throw err;
//   }
// }

// class ValidationError extends Error {
//   constructor(message) {
//     super(message);
//   }
// }

// class MyError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = this.constructor.name;
//   }
// }

// class PropertyRequiredError extends MyError {
//   constructor(property) {
//     super("No property: " + property);
//     this.property = property;
//   }
// }

// // Usage

// function readUser(json) {
//   let user = JSON.parse(json);

//   if (!user.age) {
//     throw new PropertyRequiredError("age");
//   }

//   if (!user.name) {
//     throw new PropertyRequiredError("name");
//   }

//   return user;
// }

// try {
//   let user = readUser('{"age": 25 }');
//   console.log(user);
// } catch (err) {
//   if (err instanceof MyError) {
//     console.log("Invalid data: " + err.message);
//     console.log(err.name);
//     console.log(err.property);
//   } else if (err instanceof SyntaxError) {
//     console.log("JSON Syntax Error: " + err.message);
//   } else {
//     throw err;
//   }
// }

class ReadError extends Error {
  constructor(message, cause) {
    super(message);
    this.cause = cause;
    this.name = "ReadError";
  }
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
  }
}

class PropertyRequiredError extends ValidationError {
  constructor(property) {
    super("No property: " + property);
    this.property = property;
  }
}

function validateUser(user) {
  if (!user.name) {
    throw new PropertyRequiredError("name");
  }

  if (!user.age) {
    throw new PropertyRequiredError("age");
  }
}

function readUser(json) {
  let user;

  try {
    user = JSON.parse(json);
  } catch (err) {
    if (err instanceof SyntaxError) {
      throw new ReadError("Syntax Error", err);
    } else {
      throw err;
    }
  }

  try {
    validateUser(user);
  } catch (err) {
    if (err instanceof ValidationError) {
      throw new ReadError("Validation Error", err);
    } else {
      throw err;
    }
  }
}

// try {
//   readUser("{bad json}");
// } catch (e) {
//   if (e instanceof ReadError) {
//     console.log(e);
//     console.log("Original Error: " + e.cause);
//   } else {
//     throw e;
//   }
// }

// Homework

class FormatError extends SyntaxError {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

let err = new FormatError("formatting error");
console.log(err.message);
console.log(err.name);
console.log(err.stack);
