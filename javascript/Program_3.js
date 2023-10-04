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

// 6. Bitwise Operator!
// Bitwise AND &
// 0 & 0 result 0
// 0 & 1 result 0
// 1 & 0 result 0
// 1 & 1 result 1

// Bitwise OR |
// 0 | 0 result 0
// 0 | 1 result 1
// 1 | 0 result 1
// 1 | 1 result 1

// Bitwise XOR ^
// 0 ^ 0 result 0
// 0 ^ 1 result 1
// 1 ^ 0 result 1
// 1 ^ 1 result 0

// Bitwise NOT ~
// ~0 result 1
// ~1 result 0

// Bitwise AND - &
// Bitwise OR  - |
// Bitwise XOR - ^
// Bitwise NOT - ~
// Bitwise Left Shift - <<
// Bitwise Right Shift - >>
// Bitwise Right Shift with zero - >>>

var a1 = 1, a2 = 0;
console.log("Bitwise Operator!");
// Bitwise AND - &
console.log(`(%d & %d) = %d`, a1, a2, (a1 & a2));

// Bitwise OR  - |
console.log(`(%d | %d) = %d`, a1, a2, (a1 | a2));

// Bitwise XOR - ^ (Exclusive OR)
console.log(`(%d ^ %d) = %d`, a1, a2, (a1 ^ a2));
console.log(`(%d ^ %d) = %d`, 1, 1, (1 ^ 1));
console.log(`(%d ^ %d) = %d`, 0, 0, (0 ^ 0));

// Bitwise NOT - ~
console.log(`(~%d) = %d`, a1, (~a1));
console.log(`(~%d) = %d`, a2, (~a2));
console.log(~0);
console.log(~1);

// Bitwise Left Shift - <<
console.log("Answer of left shift is: ", 5 << 1);

// Bitwise Right Shift - >>
console.log("Answer of right shift is: ", 5 >> 1);

// Bitwise Right Shift with zero - >>>
console.log("Answer of right shift with zero is: ", 5 >>> 1); // 2
console.log("Answer of right shift with zero is: ", 5 >>> 10); // 0

// typeof operator! 
var str = "My India is Best!!";
console.log(typeof "");
console.log(typeof 7);
console.log(typeof 1);
console.log(typeof 0);
console.log(typeof true);
console.log(typeof [1,2,3,4,5,6,7]);
console.log(typeof {});
console.log(typeof "this is my string ok all set brr brr!!");
console.log(typeof str);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof function(){});
console.log(typeof new Date());

console.groupEnd();
