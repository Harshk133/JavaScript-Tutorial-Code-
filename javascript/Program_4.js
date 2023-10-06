console.group("JavaScript Datatype!");
console.log("Hello, by console, welcome to javascript datatypes tutorial!");
// ** Datatypes in JavaScript ! **
// 1. String 
// 2. Symbol 
// 3. Number 
// 4. Null 
// 5. Undefined 
// 6. Bigint 
// 7. Boolean 
// 8. Object 

// 1. Object 
// 2. Array 
// 3. Date 

// ** String
let string = "My Country is best!!";
console.log(string);
console.log("👆", typeof string);

// ** Symbol 
const mySymbol = Symbol("Coding and Programming with Harsh!");
console.log(mySymbol);
console.log("👆", typeof mySymbol);

// ** Number
const number = 70;
console.log(number);
console.log("👆", typeof number);

// ** Null
let nullVariable = null;
console.log(nullVariable);
console.log("👆", typeof nullVariable);

// ** Undefined
let undefinedVariable = undefined;
console.log(undefinedVariable);
console.log("👆", typeof undefinedVariable);

// ** Bigint
let maxValueBigInt = BigInt("100000000000000000000000000000000");
console.log(maxValueBigInt);
console.log("👆", typeof maxValueBigInt);

// ** Boolean
let booleanAnswer = true;
console.log(booleanAnswer);
console.log("👆", typeof booleanAnswer);

// ** Object
let myObjectIs = {
    name: "Harsh",
    rollNo: 4,
    isHacker: true,
    isTopper: true,
    marks: [100, 100, 100, 100]
}
// console.log(myObjectIs);
console.table(myObjectIs);
console.log("👆", typeof myObjectIs);

// ** Array
let myArr = [1,2,3,4,5,6,7];
let myArrAnotherOneIs = new Array(7);
console.log(myArr);
console.log("👆", typeof myArr);
console.log(myArrAnotherOneIs);
console.log("👆", typeof myArrAnotherOneIs);
// [1, 'one', true, {…}, Symbol(@), Array(3)]

// ** Date 
let myDate = new Date("2004-12-01");
console.log(myDate);
console.groupEnd();
console.log("👆", typeof myDate);

