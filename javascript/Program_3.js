// Operators in JavaScript!

// Expression: 1 + 1 = 2 <-- Operands
//             ^ ^ ^
//   Operands__| | |__ Operands
//               |
//            Operator

console.group("Operators in JavaScript!");
// Operators 
// 1. Arithmetic Operators
let a = 5, b = 7;
// to make copies in the downside just press ctrl+shift+downarrow
console.log("Addition is %d", (a + b));
console.log("Substraction is %d", (a - b));
console.log("Multiplication is %d", (a * b));
console.log("Division is %d", (a / b));
console.log("Modulus is %d", (a % b));
console.log("Decrement is %d", (--a)); // a - 1
console.log("Increment is %d", (++b)); // b + 1

// 2. Comparision (or Relational) Operators
// to make copies in the downside just press ctrl+shift+downarrow
console.log("%d == %d", a, b, (a == b));
console.log("%d != %d", a, b, (a != b));
console.log("%d > %d", a, b, (a > b));
console.log("%d < %d", a, b, (a < b));
console.log("%d <= %d", a, b, (a <= b));
console.log("%d >= %d", a, b, (a >= b));

// 3. Logical Operators
let c = 1, d = 0;
console.log("%d && %d", c, d, (c && d));
console.log("%d || %d", c, d, (c || d));
console.log("!(%d)", d, !(d));

// 4. Assignment Operators
let e = 7, f = 1;
// console.log("Assignment operator e = %d", e);
console.log(e += f); // e = e + f
console.log(e -= f); // e = e - f
console.log(e *= f); // e = e * f
console.log(e /= f); // e = e / f
console.log(e %= f); // e = e % f

// 5. Conditional Operators (Ternary Operator)
// Syntax: (expression/condition) ? true : false;
console.log(7 > 10 ? "Yes seven is less than ten" : "No Seven is not less than right side value!!");

// TODO:
// Homework
// Give me some code for logical operators and relational operators!! Provide it into the comment!


console.groupEnd();
