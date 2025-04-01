//! Variable Declarations
//? var: Allows redeclaration, re-initialization, and is function-scoped (or globally scoped in non-function blocks)
//? let: Cannot be redeclared, but can be re-initialized. It is block-scoped.
//? const: Must be initialized at declaration and cannot be reassigned.

// Example with 'var'
var b = 20;
var b = 40; // Redeclaration allowed
b = "string"; // Re-initialization allowed

if (true) {
  var xyz = 20; // Accessible outside the block
}
console.log(xyz); // Output: 20

// Example with 'let'
let myName = "something";
myName = 123456; // Re-initialization allowed
// let myName = "new name"; // Error: Cannot redeclare

// Example with 'const'
const number = 30;
// number = 40; // Error: Cannot reassign

//! Data Types in JavaScript
//? Primitive Data Types: Can hold a single value at a time
// string, number, boolean, NaN, null, undefined, Symbol, BigInt

//? Non-Primitive Data Types: Can hold multiple values
// object, array, function

let someValue = 20;
someValue = "String"; // Allowed since JS is dynamically typed

let fun1 = function () {};
console.log(typeof fun1); // Output: function

//! Function to Swap Two Variables
//? This function swaps two numbers using a temporary variable.
//? It checks whether the inputs are numbers before performing the swap.
function swapVariables(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    console.log("Before swapping:", a, b);

    let temp = a; // Store 'a' in a temporary variable
    a = b; // Assign 'b' to 'a'
    b = temp; // Assign 'temp' (old 'a') to 'b'

    console.log("After swapping:", a, b);
  } else {
    console.log("Invalid data types. Please provide numbers.");
  }
}

// Example usage
swapVariables(20, 30); // Output: Before swapping: 20 30, After swapping: 30 20

//! typeof Operator
//? typeof returns the data type of a variable.
console.log(typeof typeof 123); // Output: string
// Explanation: typeof 123 returns "number", and typeof "number" returns "string"
